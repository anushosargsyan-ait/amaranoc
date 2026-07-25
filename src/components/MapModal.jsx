import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { db } from "../firebase"; // Ստուգիր, որ firebase.js-ը ճիշտ տեղում է
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { IoCloseOutline } from "react-icons/io5";

// ✅ CDN-ից վերցնելը 100%-ով կանխում է Vite Build Error-ները
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapModal = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState([]);
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Ստանում ենք ընթացիկ օգտատիրոջ տեղադիրքը և պահում Firebase-ում
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setMyLocation([latitude, longitude]);

          let userId = localStorage.getItem("app_user_id");
          if (!userId) {
            userId = "user_" + Math.random().toString(36).substring(2, 9);
            localStorage.setItem("app_user_id", userId);
          }

          try {
            await setDoc(doc(db, "active_users", userId), {
              id: userId,
              lat: latitude,
              lng: longitude,
              lastOnline: new Date(),
            });
          } catch (error) {
            console.error("Error saving user location:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }

    // 2. Real-time լսում ենք ԲՈԼՈՐ մուտք եղածներին
    const unsubscribe = onSnapshot(
      collection(db, "active_users"),
      (snapshot) => {
        const activeUsersList = [];
        snapshot.forEach((doc) => {
          activeUsersList.push(doc.data());
        });
        setUsers(activeUsersList);
      },
      (error) => {
        console.error("Firestore error:", error);
      }
    );

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  const centerPosition = myLocation || [40.1792, 44.4991];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[900px] h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <h3 className="text-lg font-bold text-gray-800 m-0">
            Ակտիվ օգտատերեր քարտեզի վրա ({users.length} հոգի)
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 cursor-pointer"
          >
            <IoCloseOutline size={22} />
          </button>
        </div>

        {/* Map Container */}
        <div className="flex-1 w-full h-full relative">
          <MapContainer
            center={centerPosition}
            zoom={12}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Բոլոր ակտիվ օգտատերերի Marker-ները */}
            {users.map((user) => (
              <Marker
                key={user.id}
                position={[user.lat, user.lng]}
                icon={customIcon}
              >
                <Popup>
                  <div className="text-center font-sans">
                    <p className="font-bold text-sm m-0">
                      Օգտատեր #{user.id ? user.id.slice(-4) : "—"}
                    </p>
                    <span className="text-xs text-green-600 font-semibold">
                      ● Ակտիվ է
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </div>
  );
};

export default MapModal;