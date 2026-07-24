import React, { useState, useEffect } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // 👈 2 կետով (..) դուրս է գալիս src

const MapModal = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(null);
  const [liveLocation, setLiveLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // 1. Ստուգում ենք User-ի login եղած լինելը
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 2. Google Auth Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMsg("Google-ով մուտքը չհաջողվեց։");
    }
  };

  // 3. Live Geolocation (watchPosition)
  useEffect(() => {
    let watchId;

    if (isOpen && user) {
      if ("geolocation" in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLiveLocation({ lat: latitude, lng: longitude });
          },
          (err) => {
            console.error("Location Error:", err);
            setErrorMsg("Խնդրում ենք միացնել GPS-ը/Location-ը տեղադրությունը ստանալու համար։");
          },
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 10000,
          }
        );
      } else {
        setErrorMsg("Քո բրաուզերը չի աջակցում Geolocation API:");
      }
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [isOpen, user]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl relative flex flex-col gap-4 animate-in fade-in zoom-in duration-200">
        
        {/* Փակելու կոճակ */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800">Քարտեզ / Live Location</h2>

        {/* --- ԵԹԵ ՄՈՒՏՔ ՉԻ ԳՈՐԾԵԼ --- */}
        {!user ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
            <p className="text-gray-600 font-medium">
              Քարտեզն ու քո Live Լոկացիան տեսնելու համար խնդրում ենք մուտք գործել Google-ով։
            </p>
            
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition bg-white font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google Icon"
                className="w-5 h-5"
              />
              Մուտք գործել Google-ով
            </button>
          </div>
        ) : (
          /* --- ԵԹԵ ՄՈՒՏՔ Է ԳՈՐԾԵԼ --- */
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                <span className="text-sm font-semibold text-gray-800">
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={() => signOut(auth)}
                className="text-xs text-red-500 hover:underline font-medium cursor-pointer"
              >
                Դուրս գալ
              </button>
            </div>

            {/* LIVE QARTEZ / MAP */}
            {liveLocation ? (
              <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-inner border border-gray-200">
                <iframe
                  title="Live Google Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${liveLocation.lat},${liveLocation.lng}&z=16&output=embed`}
                ></iframe>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[200px] bg-gray-50 rounded-xl text-gray-500 text-sm animate-pulse">
                📡 Որոշվում է քո Live տեղադրությունը (GPS)...
              </div>
            )}

            {errorMsg && (
              <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapModal;