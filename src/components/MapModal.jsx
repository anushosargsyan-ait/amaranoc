import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { auth, googleProvider, db } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { IoCloseOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

// Standard Leaflet Icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Default Երևան
const DEFAULT_LAT = 40.1792;
const DEFAULT_LNG = 44.4991;

// Օգնող Component՝ միայն առաջին անգամ քարտեզը օգտատիրոջ դիրքի վրա կենտրոնացնելու համար
const ChangeView = ({ center }) => {
  const map = useMap();
  const [hasCentered, setHasCentered] = useState(false);

  useEffect(() => {
    if (center && center[0] && center[1] && !hasCentered) {
      map.setView(center, 13);
      setHasCentered(true);
    }
  }, [center, map, hasCentered]);

  return null;
};

const MapModal = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Firebase Auth Listener
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribeAuth();
  }, []);

  // 2. Real-time Live Tracking (Անընդհատ հետևում ու թարմացնում է դիրքը)
  useEffect(() => {
    if (!isOpen || !currentUser) return;

    let watchId = null;

    // Ֆունկցիա՝ Firestore-ում կոորդինատները թարմացնելու համար
    const updateUserInDb = async (lat, lng) => {
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

    // Լոկացիան ստանալու ֆունկցիա
    const fetchCurrentPosition = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => updateUserInDb(pos.coords.latitude, pos.coords.longitude),
          (err) => console.warn("Geolocation warning:", err.message),
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      }
    };

    if ("geolocation" in navigator) {
      // Անմիջապես վերցնում ենք առաջին դիրքը
      fetchCurrentPosition();

      // Միացնում ենք watchPosition-ը GPS շարժումները որսալու համար
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          updateUserInDb(position.coords.latitude, position.coords.longitude);
        },
        (error) => console.warn("Watch error:", error.message),
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 10000,
        }
      );
    } else {
      updateUserInDb(DEFAULT_LAT, DEFAULT_LNG);
    }

    // Ֆիքսված Interval (3 վայրկյանը մեկ), որպեսզի շարժվելն անպայման ֆիքսվի
    const intervalId = setInterval(() => {
      fetchCurrentPosition();
    }, 3000);

    // Clean up. Երբ Modal-ը փակվում է, անջատում ենք հետևելը
    return () => {
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
      clearInterval(intervalId);
    };
  }, [isOpen, currentUser]);

  // 3. Firestore Real-time listener (Մյուս ակտիվ օգտատերերին ստանալու համար)
  useEffect(() => {
    if (!isOpen || !currentUser) return;

    const unsubscribeSnapshot = onSnapshot(
      collection(db, "active_users"),
      (snapshot) => {
        const activeUsersList = [];
        const now = Date.now();
        const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 ժամ

        snapshot.forEach((doc) => {
          const data = doc.data();
          if (
            data.lat &&
            data.lng &&
            (!data.updatedAt || now - data.updatedAt < ONE_DAY_MS)
          ) {
            activeUsersList.push(data);
          }
        });
        setUsers(activeUsersList);
      },
      (error) => {
        console.error("Firestore error:", error);
      }
    );

    return () => unsubscribeSnapshot();
  }, [isOpen, currentUser]);

  // Google Sign-In
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

  // Օգտատիրոջ դիրքը քարտեզի սկզբնական կենտրոնի համար
  const myData = users.find((u) => u.id === currentUser?.uid);
  const centerPosition = myData
    ? [myData.lat, myData.lng]
    : [DEFAULT_LAT, DEFAULT_LNG];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* CSS Անիմացիա՝ Մարկերների սահուն տեղաշարժվելու (Smooth Walking effect) համար */}
      <style>{`
        .leaflet-marker-icon, .leaflet-marker-shadow {
          transition: transform 1s linear !important;
        }
      `}</style>

      <div className="relative w-full max-w-[900px] h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-10">
          <h3 className="text-lg font-bold text-gray-800 m-0">
            {currentUser
              ? `Ակտիվ օգտատերեր քարտեզի վրա (${users.length} հոգի)`
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
            <p className="text-gray-600 max-w-[400px] mb-6 text-sm">
              Քարտեզի վրա մյուս օգտատերերին տեսնելու համար անհրաժեշտ է մուտք գործել։
            </p>
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
            <MapContainer
              center={centerPosition}
              zoom={13}
              scrollWheelZoom={true}
              style={{ width: "100%", height: "100%" }}
            >
              <ChangeView center={centerPosition} />
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
                          {user.name}
                        </p>
                        <span className="text-[11px] text-green-600 font-semibold block mt-0.5">
                          ● Ակտիվ է
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