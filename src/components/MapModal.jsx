import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { auth, googleProvider, db } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { IoCloseOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { MdMyLocation } from "react-icons/md"; // 📍 Կոճակի իկոնկայի համար

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const DEFAULT_LAT = 40.1792;
const DEFAULT_LNG = 44.4991;

// 🔄 Քարտեզի տեսքի և հետևման կառավարում
const MapController = ({ center, followUser }) => {
  const map = useMap();

  useEffect(() => {
    if (center && center[0] && center[1]) {
      if (followUser) {
        // panTo-ն ապահովում է սահուն տեղաշարժ դեպի նոր կետ
        map.panTo(center, { animate: true, duration: 0.8 });
      }
    }
  }, [center, followUser, map]);

  return null;
};

const MapModal = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [followUser, setFollowUser] = useState(true); // Սկզբում միացված է հետևելու ռեժիմը

  // 1. Auth Listener
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  // 2. LIVE TRACKING (GPS)
  useEffect(() => {
    if (!isOpen || !currentUser) return;

    let watchId = null;
    let lastLat = null;
    let lastLng = null;

    const updateUserInDb = async (lat, lng) => {
      if (lat === lastLat && lng === lastLng) return;
      
      lastLat = lat;
      lastLng = lng;

      try {
        await setDoc(
          doc(db, "active_users", currentUser.uid),
          {
            id: currentUser.uid,
            name: currentUser.displayName || "Անանուն",
            photo: currentUser.photoURL || "",
            lat: Number(lat),
            lng: Number(lng),
            updatedAt: Date.now(),
          },
          { merge: true }
        );
      } catch (err) {
        console.error("Firebase save error:", err);
      }
    };

    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          updateUserInDb(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => console.warn("GPS Watch Error:", err.message),
        {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 10000,
        }
      );
    }

    return () => {
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    };
  }, [isOpen, currentUser]);

  // 3. Firestore Listener (Realtime)
  useEffect(() => {
    if (!isOpen || !currentUser) return;

    const unsubscribeSnapshot = onSnapshot(
      collection(db, "active_users"),
      (snapshot) => {
        const activeUsersList = [];
        const now = Date.now();
        const FIVE_MINUTES = 5 * 60 * 1000;

        snapshot.forEach((doc) => {
          const data = doc.data();
          if (
            data.lat &&
            data.lng &&
            (!data.updatedAt || now - data.updatedAt < FIVE_MINUTES)
          ) {
            activeUsersList.push(data);
          }
        });
        setUsers(activeUsersList);
      },
      (error) => console.error("Firestore error:", error)
    );

    return () => unsubscribeSnapshot();
  }, [isOpen, currentUser]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const myData = users.find((u) => u.id === currentUser?.uid);
  const centerPosition = myData
    ? [myData.lat, myData.lng]
    : [DEFAULT_LAT, DEFAULT_LNG];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[900px] h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-10">
          <h3 className="text-lg font-bold text-gray-800 m-0">
            {currentUser
              ? `Live Օգտատերեր (${users.length} հոգի)`
              : "Քարտեզը տեսնելու համար մուտք գործեք"}
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 cursor-pointer"
          >
            <IoCloseOutline size={22} />
          </button>
        </div>

        {/* Body */}
        {!currentUser ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gray-50">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <FcGoogle size={36} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Մուտք գործեք Google-ով
            </h2>
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-all text-gray-700 font-semibold cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <FcGoogle size={24} />
              <span>{loading ? "Մուտք է գործում..." : "Մուտք գործել Google-ով"}</span>
            </button>
          </div>
        ) : (
          <div className="flex-1 w-full h-full relative">
            
            {/* 📍 Լոկացիայի վերադարձման կոճակ (ինչպես նավիգատորներում) */}
            <button
              onClick={() => setFollowUser(true)}
              className={`absolute bottom-6 right-6 z-[1000] p-3 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center ${
                followUser 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              title="Կենտրոնացնել իմ վրա"
            >
              <MdMyLocation size={24} />
            </button>

            <MapContainer
              center={centerPosition}
              zoom={16}
              scrollWheelZoom={true}
              style={{ width: "100%", height: "100%" }}
              // Եթե օգտատերը ձեռքով քարտեզը շարժի, անջատում ենք ավտո-հետևումը (ինչպես Google Maps-ում)
              onDragStart={() => setFollowUser(false)}
            >
              <MapController center={centerPosition} followUser={followUser} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {users.map((user) => (
                <Marker
                  key={user.id}
                  position={[user.lat, user.lng]}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="flex items-center gap-2.5 p-1 font-sans">
                      {user.photo ? (
                        <img
                          src={user.photo}
                          alt={user.name}
                          className="w-9 h-9 rounded-full object-cover border border-gray-300 shadow-sm"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                          {user.name ? user.name[0].toUpperCase() : "U"}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-sm m-0 text-gray-900 leading-tight">
                          {user.name} {user.id === currentUser?.uid && "(Դուք)"}
                        </p>
                        <span className="text-[11px] text-green-600 font-semibold block mt-0.5 animate-pulse">
                          ● Live
                        </span>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}

      </div>
    </div>
  );
};

export default MapModal;