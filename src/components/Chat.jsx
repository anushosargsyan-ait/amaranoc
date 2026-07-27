import React, { useState, useEffect, useRef } from "react";
import { auth, db, googleProvider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { 
  collection, doc, setDoc, query, orderBy, onSnapshot, addDoc, serverTimestamp, updateDoc, where
} from "firebase/firestore";
import WaveSurfer from "wavesurfer.js";

const iceServers = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ],
};

const DEFAULT_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v78OryFf-8N8yE_O0gPZt496E-C_n2-RFA&s";

// ==========================================
// 1. VOICE PLAYER COMPONENT (Waveform)
// ==========================================
function VoicePlayer({ audioUrl, isMe }) {
  const containerRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("00:00");

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: isMe ? "#a4d4ff" : "#b0b3b8", 
      progressColor: isMe ? "#ffffff" : "#007bff", 
      cursorWidth: 0, 
      barWidth: 2, 
      barGap: 2, 
      barRadius: 2, 
      height: 30, 
      responsive: true,
    });

    wavesurferRef.current = ws;
    ws.load(audioUrl);

    ws.on("ready", () => {
      const totalSec = Math.floor(ws.getDuration());
      const mins = Math.floor(totalSec / 60).toString().padStart(2, "0");
      const secs = (totalSec % 60).toString().padStart(2, "0");
      setDuration(`${mins}:${secs}`);
    });

    ws.on("finish", () => setIsPlaying(false));

    return () => ws.destroy();
  }, [audioUrl, isMe]);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center gap-3 p-1 min-w-[180px] sm:min-w-[220px]">
      <button
        type="button"
        onClick={togglePlay}
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm transition ${
          isMe ? "bg-white text-[#007bff]" : "bg-[#007bff] text-white"
        }`}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
      <div className="flex-1 flex flex-col justify-center">
        <div ref={containerRef} className="w-full" />
        <span className={`text-[10px] mt-0.5 ${isMe ? "text-blue-100" : "text-gray-500"}`}>
          {duration}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 2. ՀԻՄՆԱԿԱՆ CHAT COMPONENT
// ==========================================
export default function Chat({ isOpen }) {
  // Ներքին սթեյթ, որը երաշխավորում է փակվելը անկախ ծնող կոմպոնենտից
  const [isVisible, setIsVisible] = useState(true);

  // Եթե արտաքին isOpen-ը փոխվի true, նորից ցույց տալու համար
  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const [user, setUser] = useState(null); 
  const [usersList, setUsersList] = useState([]); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [unreadCounts, setUnreadCounts] = useState({}); 

  // Ձայնագրման սթեյթեր
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // --- ԶԱՆԳԵՐԻ ՍԹԵՅԹԵՐ ---
  const [callState, setCallState] = useState("idle"); 
  const [callType, setCallType] = useState(null); 
  const [activeCallId, setActiveCallId] = useState(null);
  const [isIncomingCall, setIsIncomingCall] = useState(false);
  const [callerInfo, setCallerInfo] = useState(null);
  const callTimeoutRef = useRef(null); 
  const callStartTimeRef = useRef(null); 
  const isLoggedRef = useRef(false);

  const localStreamRef = useRef(null);
  const pcRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const dummySpace = useRef();

  // Օգտատիրոջ մուտք, Ցուցակ և Activity Status
  useEffect(() => {
    let unsubscribeUsers = () => {};

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          await setDoc(doc(db, "users", currentUser.uid), {
            uid: currentUser.uid,
            displayName: currentUser.displayName || "Անանուն",
            photoURL: currentUser.photoURL || DEFAULT_AVATAR,
            email: currentUser.email,
            status: "online", 
            lastSeen: serverTimestamp()
          }, { merge: true });

          unsubscribeUsers = onSnapshot(collection(db, "users"), (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => {
              if (doc.id !== currentUser.uid) list.push(doc.data());
            });
            setUsersList(list);
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        setUsersList([]);
      }
    });

    const handleStatusChange = async () => {
      if (auth.currentUser) {
        await setDoc(doc(db, "users", auth.currentUser.uid), { status: "offline", lastSeen: serverTimestamp() }, { merge: true });
      }
    };
    window.addEventListener("beforeunload", handleStatusChange);

    return () => {
      unsubscribeAuth();
      unsubscribeUsers();
      window.removeEventListener("beforeunload", handleStatusChange);
    };
  }, []);

  // Չընթերցված նամակների քանակը
  useEffect(() => {
    if (!user) return;

    const unsubscribes = usersList.map((u) => {
      const roomId = [user.uid, u.uid].sort().join("_");
      const q = query(
        collection(db, "chats", roomId, "messages"),
        where("senderId", "==", u.uid),
        where("seen", "==", false)
      );

      return onSnapshot(q, (snapshot) => {
        setUnreadCounts((prev) => ({ ...prev, [u.uid]: snapshot.size }));
      });
    });

    return () => unsubscribes.forEach((unsub) => unsub());
  }, [usersList, user]);

  // Նամակների լսում և Seen անելը
  useEffect(() => {
    if (!selectedUser || !user) return;

    const roomId = [user.uid, selectedUser.uid].sort().join("_");
    const q = query(collection(db, "chats", roomId, "messages"), orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgList);
      setTimeout(() => dummySpace.current?.scrollIntoView({ behavior: "smooth" }), 100);

      snapshot.docs.forEach(async (messageDoc) => {
        const data = messageDoc.data();
        if (data.senderId === selectedUser.uid && !data.seen) {
          await updateDoc(doc(db, "chats", roomId, "messages", messageDoc.id), { seen: true });
        }
      });
    });

    return () => unsubscribe();
  }, [selectedUser, user]);

  // ՄՈՒՏՔԱՅԻՆ ԶԱՆԳԵՐԻ ԼՍՈՒՄ
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "calls"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        if (change.type === "added" || change.type === "modified") {
          if (data.targetId === user.uid && data.status === "offered" && callState === "idle") {
            setIsIncomingCall(true);
            setCallerInfo(data.caller);
            setCallType(data.type);
            setActiveCallId(change.doc.id);
            setCallState("ringing");
          }
          if (data.status === "rejected" && activeCallId === change.doc.id) {
            setCallState("rejected");
            setTimeout(() => cleanupCall("rejected"), 2000);
          }
          if (data.status === "no_answer" && activeCallId === change.doc.id) {
            setCallState("no_answer");
            setTimeout(() => cleanupCall("no_answer"), 2000);
          }
          if (data.status === "ended" && activeCallId === change.doc.id) {
            cleanupCall("ended");
          }
        }
      });
    });

    return () => unsubscribe();
  }, [user, callState, activeCallId]);

  // WEBRTC ՖՈՒՆԿՑԻԱՆԵՐ
  const startCall = async (type) => {
    if (!selectedUser || !user) return;

    try {
      isLoggedRef.current = false;
      setCallType(type);
      setCallState("dialing");

      const callDocRef = doc(collection(db, "calls"));
      setActiveCallId(callDocRef.id);

      callTimeoutRef.current = setTimeout(async () => {
        await updateDoc(callDocRef, { status: "no_answer" });
        setCallState("no_answer");
        setTimeout(() => cleanupCall("no_answer"), 2000);
      }, 30000);

      const constraints = { audio: true, video: type === "video" ? { width: 300, height: 300 } : false };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;

      const pc = new RTCPeerConnection(iceServers);
      pcRef.current = pc;
      stream.getTracks().forEach(track => pc.addTrack(track, stream));

      pc.ontrack = (event) => { if (remoteVideoRef.current) remoteVideoRef.current.srcObject = event.streams[0]; };

      const candidatesCollection = collection(callDocRef, "callerCandidates");
      pc.onicecandidate = (event) => { if (event.candidate) addDoc(candidatesCollection, event.candidate.toJSON()); };

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      await setDoc(callDocRef, {
        offer: { sdp: offerDescription.sdp, type: offerDescription.type },
        status: "offered",
        type,
        targetId: selectedUser.uid,
        caller: { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL || DEFAULT_AVATAR }
      });

      onSnapshot(callDocRef, (snapshot) => {
        const data = snapshot.data();
        if (data?.answer && !pc.currentRemoteDescription) {
          clearTimeout(callTimeoutRef.current);
          pc.setRemoteDescription(new RTCSessionDescription(data.answer));
          setCallState("active");
          callStartTimeRef.current = Date.now(); 
        }
      });

      onSnapshot(collection(callDocRef, "calleeCandidates"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") pc.addIceCandidate(new RTCIceCandidate(change.doc.data()));
        });
      });
    } catch (err) {
      cleanupCall("ended");
    }
  };

  const answerCall = async () => {
    if (!activeCallId) return;
    clearTimeout(callTimeoutRef.current);

    try {
      isLoggedRef.current = false;
      setIsIncomingCall(false);
      setCallState("active");
      callStartTimeRef.current = Date.now(); 

      const callDocRef = doc(db, "calls", activeCallId);
      const constraints = { audio: true, video: callType === "video" ? { width: 300, height: 300 } : false };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;

      const pc = new RTCPeerConnection(iceServers);
      pcRef.current = pc;
      stream.getTracks().forEach(track => pc.addTrack(track, stream));

      pc.ontrack = (event) => { if (remoteVideoRef.current) remoteVideoRef.current.srcObject = event.streams[0]; };

      const calleeCandidatesCollection = collection(callDocRef, "calleeCandidates");
      pc.onicecandidate = (event) => { if (event.candidate) addDoc(calleeCandidatesCollection, event.candidate.toJSON()); };

      onSnapshot(callDocRef, async (snapshot) => {
        const data = snapshot.data();
        if (data && data.status === "offered" && !pc.currentRemoteDescription) {
          await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
          const answerDescription = await pc.createAnswer();
          await pc.setLocalDescription(answerDescription);
          await updateDoc(callDocRef, {
            answer: { type: answerDescription.type, sdp: answerDescription.sdp },
            status: "answered"
          });
        }
      });

      onSnapshot(collection(callDocRef, "callerCandidates"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") pc.addIceCandidate(new RTCIceCandidate(change.doc.data()));
        });
      });
    } catch (err) {
      cleanupCall("ended");
    }
  };

  const rejectCall = async () => {
    if (activeCallId) await updateDoc(doc(db, "calls", activeCallId), { status: "rejected" });
    cleanupCall("rejected");
  };

  const endCall = async () => {
    if (activeCallId) await updateDoc(doc(db, "calls", activeCallId), { status: "ended" });
    cleanupCall("ended");
  };

  const cleanupCall = async (finalStatus) => {
    clearTimeout(callTimeoutRef.current);

    if (activeCallId && selectedUser && user && !isLoggedRef.current) {
      isLoggedRef.current = true;

      let logType = "missed"; 
      let durationText = "";

      if (callStartTimeRef.current && finalStatus === "ended") {
        logType = "answered";
        const totalSec = Math.floor((Date.now() - callStartTimeRef.current) / 1000);
        const mins = Math.floor(totalSec / 60);
        durationText = mins > 0 ? `${mins} min` : `${totalSec} sec`;
      } else if (finalStatus === "rejected" || finalStatus === "no_answer") {
        logType = "missed";
      }

      const roomId = [user.uid, selectedUser.uid].sort().join("_");
      
      try {
        await addDoc(collection(db, "chats", roomId, "messages"), {
          senderId: user.uid,
          seen: false,
          createdAt: serverTimestamp(),
          isCallLog: true,          
          callLogType: logType,     
          mediaType: callType,      
          duration: durationText || "1 min",   
          isIncoming: isIncomingCall 
        });
      } catch (e) { 
        console.error(e); 
        isLoggedRef.current = false;
      }
    }

    if (localStreamRef.current) localStreamRef.current.getTracks().forEach(track => track.stop());
    if (pcRef.current) pcRef.current.close();
    localStreamRef.current = null;
    pcRef.current = null;
    callStartTimeRef.current = null;
    setCallState("idle");
    setActiveCallId(null);
    setIsIncomingCall(false);
    setCallerInfo(null);
    setCallType(null);
  };

  // ՁԱՅՆԱԳՐՈՒԹՅՈՒՆ
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => { if (e.data.size > 0) audioChunksRef.current.push(e.data); };
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const roomId = [user.uid, selectedUser.uid].sort().join("_");
          await addDoc(collection(db, "chats", roomId, "messages"), {
            audio: reader.result, senderId: user.uid, seen: false, createdAt: serverTimestamp()
          });
        };
        stream.getTracks().forEach(track => track.stop());
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) { alert("Միկրոֆոնի խնդիր:"); }
  };

  const stopRecording = () => { if (mediaRecorderRef.current && isRecording) { mediaRecorderRef.current.stop(); setIsRecording(false); } };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser || !user) return;
    const roomId = [user.uid, selectedUser.uid].sort().join("_");
    try {
      await addDoc(collection(db, "chats", roomId, "messages"), {
        text: newMessage, senderId: user.uid, seen: false, createdAt: serverTimestamp()
      });
      setNewMessage("");
    } catch (e) { console.error(e); }
  };

  const handleLogin = async () => { try { await signInWithPopup(auth, googleProvider); } catch (e) { console.error(e); } };
  const handleSignOut = async () => { if (user) { await setDoc(doc(db, "users", user.uid), { status: "offline" }, { merge: true }); } signOut(auth); };

  // Եթե արտաքինից փակ է կամ ներսից են սեղմել X-ը, չի ցուցադրվում
  if (!isOpen || !isVisible) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 z-50 bg-white border border-[#e4e6eb] sm:rounded-[16px] shadow-2xl w-full h-full sm:w-[500px] sm:h-[480px] lg:w-[600px] lg:h-[550px] overflow-hidden flex flex-col font-sans text-black">
      
      {/* --- CALL INTERFACE OVERLAY --- */}
      {callState !== "idle" && (
        <div className="absolute inset-0 bg-black/95 z-50 flex flex-col items-center justify-center text-white p-4">
          <div className="text-center mb-4">
            <h3 className="text-sm font-bold">
              {callState === "rejected" && "🛑 Զանգը մերժվեց"}
              {callState === "no_answer" && "⏳ Անպատասխան..."}
              {callState === "dialing" && "Զանգ է գնում..."}
              {callState === "ringing" && "🔊 Մուտքային զանգ..."}
              {callState === "active" && "🟢 Խոսակցություն..."}
            </h3>
            <p className="text-xs text-gray-300">{isIncomingCall ? callerInfo?.displayName : selectedUser?.displayName}</p>
          </div>

          {callState !== "rejected" && callState !== "no_answer" && (
            <>
              {callType === "video" && (
                <div className="relative w-full flex-1 flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden max-h-[300px]">
                  <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
                  <video ref={localVideoRef} autoPlay playsInline muted className="absolute top-2 right-2 w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-white rounded shadow-md" />
                </div>
              )}

              {callType === "audio" && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl animate-pulse">📞</div>
                  <audio ref={remoteVideoRef} autoPlay playsInline />
                  <audio ref={localVideoRef} autoPlay playsInline muted />
                </div>
              )}

              <div className="flex gap-4 mt-4">
                {isIncomingCall && callState === "ringing" && (
                  <button onClick={answerCall} className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full text-xs font-bold transition">Պատասխանել</button>
                )}
                <button onClick={isIncomingCall && callState === "ringing" ? rejectCall : endCall} className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-xs font-bold transition">
                  {isIncomingCall && callState === "ringing" ? "Մերժել" : "Անջատել"}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {!user ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-4 relative">
          {/* Հիմնական փակելու կոճակ (մուտք չեղած վիճակում) */}
          <button 
            type="button"
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white flex items-center justify-center text-gray-700 font-bold text-sm shadow-md cursor-pointer z-50 transition-colors"
          >
            ✕
          </button>
          <button onClick={handleLogin} className="bg-[#007bff] text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md">Մուտք Google-ով</button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col sm:flex-row h-full overflow-hidden relative">
          
          {/* Հիմնական փակելու կոճակ (մուտք եղած վիճակում) */}
          <button 
            type="button"
            onClick={() => setIsVisible(false)}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white flex items-center justify-center text-gray-700 font-bold text-xs shadow-md cursor-pointer z-50 transition-colors"
            title="Փակել չատը"
          >
            ✕
          </button>

          {/* ՁԱԽ ՄԱՍ — Օգտատերեր */}
          <div className={`w-full sm:w-[190px] lg:w-[210px] border-r border-gray-200 flex flex-col justify-between bg-gray-50/50 ${selectedUser ? 'hidden sm:flex' : 'flex'} h-full pt-8 sm:pt-0`}>
            <div className="p-3 overflow-y-auto flex-1">
              <h4 className="font-bold text-[11px] text-gray-400 uppercase tracking-wider mb-2">Օգտատերեր ({usersList.length})</h4>
              <div className="space-y-1">
                {usersList.map((u) => (
                  <button
                    key={u.uid}
                    onClick={() => setSelectedUser(u)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition ${
                      selectedUser?.uid === u.uid ? "bg-[#007bff] text-white" : "hover:bg-gray-200 text-black"
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="relative flex-shrink-0">
                        <img src={u.photoURL || DEFAULT_AVATAR} alt="" className="w-6 h-6 rounded-full border object-cover" referrerPolicy="no-referrer" />
                        <span className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border border-white ${u.status === "online" ? "bg-green-500" : "bg-gray-400"}`}></span>
                      </div>
                      <span className="text-xs font-medium truncate max-w-[110px]">{u.displayName}</span>
                    </div>
                    {unreadCounts[u.uid] > 0 && (
                      <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0">{unreadCounts[u.uid]}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-2 border-t bg-white flex items-center justify-between gap-1">
              <div className="flex items-center gap-1 overflow-hidden">
                <img src={user.photoURL || DEFAULT_AVATAR} alt="" className="w-6 h-6 rounded-full object-cover" referrerPolicy="no-referrer" />
                <span className="text-[11px] font-semibold truncate max-w-[85px]">{user.displayName}</span>
              </div>
              <button onClick={handleSignOut} className="text-[11px] text-red-500 hover:underline">Դուրս գալ</button>
            </div>
          </div>

          {/* ԱՋ ՄԱՍ — Չատ */}
          <div className={`flex-1 flex flex-col justify-between bg-white h-full ${!selectedUser ? 'hidden sm:flex' : 'flex'}`}>
            {selectedUser ? (
              <>
                <div className="p-3 border-b flex items-center justify-between bg-gray-50 pr-12 sm:pr-10">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSelectedUser(null)} 
                      className="sm:hidden text-gray-600 font-bold text-sm mr-1"
                    >
                      ←
                    </button>
                    <img src={selectedUser.photoURL || DEFAULT_AVATAR} alt="" className="w-7 h-7 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <span className="font-semibold text-xs truncate max-w-[110px] sm:max-w-none">{selectedUser.displayName}</span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startCall("audio")} className="p-1.5 hover:bg-gray-200 rounded-full text-xs">📞</button>
                    <button onClick={() => startCall("video")} className="p-1.5 hover:bg-gray-200 rounded-full text-xs">📹</button>
                  </div>
                </div>

                {/* ՆԱՄԱԿՆԵՐԻ ՑՈՒՑԱԴՐՈՒՄ */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-[#f4f4f7]">
                  {messages.map((msg) => {
                    const isMe = msg.senderId === user.uid;
                    
                    if (msg.isCallLog) {
                      const isMissed = msg.callLogType === "missed";
                      return (
                        <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                          <div className={`flex items-center gap-3 p-3 rounded-[18px] shadow-sm max-w-[75%] min-w-[180px] ${
                            isMe ? "bg-[#1f2c22] text-white border border-[#2e4233]" : "bg-[#202124] text-white border border-gray-800"
                          }`}>
                            <div className="text-xl">
                              {msg.mediaType === "video" ? "📹" : "📞"}
                            </div>
                            <div className="flex-1 flex flex-col">
                              <span className="text-xs font-semibold">
                                {msg.mediaType === "video" ? "Video Call" : "Incoming Call"}
                              </span>
                              <div className="flex items-center gap-1 text-[11px] mt-0.5">
                                {isMissed ? (
                                  <>
                                    <span className="text-red-500 font-bold">↑ </span>
                                    <span className="text-red-400 font-medium">Missed</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="text-green-500 font-bold">↗ </span>
                                    <span className="text-gray-400">{msg.duration}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                        <div className={`p-2 rounded-xl text-xs max-w-[80%] break-words shadow-sm ${isMe ? "bg-[#007bff] text-white" : "bg-gray-200 text-black"}`}>
                          {msg.audio ? <VoicePlayer audioUrl={msg.audio} isMe={isMe} /> : msg.text}
                        </div>
                      </div>
                    );
                  })}
                  <div ref={dummySpace}></div>
                </div>

                <form onSubmit={handleSendMessage} className="p-2 border-t flex gap-1 items-center bg-white">
                  <input
                    type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                    placeholder={isRecording ? "Ձայնագրվում է..." : "Գրեք նամակ..."} disabled={isRecording}
                    className="flex-1 border border-gray-200 p-2 rounded-md text-xs outline-none focus:border-blue-500"
                  />
                  <button type="button" onClick={isRecording ? stopRecording : startRecording} className={`p-2 rounded-md text-xs ${isRecording ? "bg-red-500 text-white animate-pulse" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                    {isRecording ? "🛑" : "🎙️"}
                  </button>
                  <button type="submit" disabled={isRecording} className="bg-[#007bff] text-white px-3 py-2 rounded-md text-xs font-medium">Ուղարկել</button>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 text-xs p-4 text-center bg-[#f4f4f7]">
                Ընտրեք օգտատեր ձախ ցուցակից՝ չատը սկսելու համար:
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}