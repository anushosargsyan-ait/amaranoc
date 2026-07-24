import React, { useState } from "react";
import MapModal from "./MapModal"; // 👈 Ներմուծում ենք ստեղծած modal-ը

const Navigation = () => {
  // Modal-ի բաց/փակ վիճակը
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div>
      {/* Քո գոյություն ունեցող «Քարտեզ» կոճակը */}
      <button
        onClick={() => setIsMapOpen(true)}
        className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 transition"
      >
        <span>Քարտեզ</span>
      </button>

      {/* Քարտեզի Modal-ը */}
      <MapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
      />
    </div>
  );
};

export default Navigation;