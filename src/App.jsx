import React, { useState } from "react"; // 1. Ավելացրինք useState-ը
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import NaxaFooter from "./components/NaxaFooter/NaxaFooter";
import Footer from "./components/Footer/Footer";
import Discounts from "./Pages/Discount/Discounts";
import Services from "./Pages/Services/Services";
import Info from "./Pages/Info/Info";
import HouseDetails from "./Pages/HouseDetails/HouseDetails";

// 2. Ավելացնում ենք Չաթն ու իր իկոնները
import Chat from "./components/Chat"; 
import { IoCloseOutline } from "react-icons/io5"; 
import { AiOutlineMessage } from "react-icons/ai"; 

// 3. Ավելացնում ենք Քարտեզի Modal-ը
import MapModal from "./components/MapModal"; // 👈 Ստուգիր MapModal.jsx-ի ճիշտ path-ը

function App() {
  // 4. State-եր Չաթի և Քարտեզի համար
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false); // 👈 Քարտեզի բաց/փակ վիճակը

  return (
    <BrowserRouter>
      {/* 5. "relative" դասը, որ լողացող կոճակները ճիշտ դիրքավորվեն */}
      <div className="w-full min-h-screen text-[#1a1a1a] relative">
        {/* Header-ին փոխանցում ենք onMapOpen-ը, որ կոճակին սեղմելիս բացվի Modal-ը */}
        <Header onMapOpen={() => setIsMapOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-[1320px] mx-auto px-[15px] xl:px-[20px] flex items-start gap-[30px] mt-[30px] mb-[50px]">
                <div className="flex-shrink-0 w-[280px]">
                  <Aside />
                </div>
                <div className="flex-1 w-full overflow-hidden">
                  <Main />
                </div>
              </div>
            }
          />

          <Route path="/discounts" element={<Discounts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Info />} />
          <Route path="/house/:id" element={<HouseDetails />} />
        </Routes>

        {/* 6. ՔԱՐՏԵԶԻ MODAL-Ը */}
        <MapModal 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)} 
        />

        {/* 7. ՉԱԹԻ ԼՈՂԱՑՈՂ ԿՈՃԱԿԸ ԵՎ ՊԱՏՈՒՀԱՆԸ */}
        <div className="fixed bottom-[25px] right-[25px] z-[9999] flex flex-col items-end gap-[10px]">
          {/* Պատուհանը */}
          <Chat isOpen={isChatOpen} />

          {/* Կոճակը */}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`w-[55px] h-[55px] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isChatOpen ? "bg-[#e4e6eb] text-black" : "bg-[#007bff] text-white"
            }`}
          >
            {isChatOpen ? <IoCloseOutline size={30} /> : <AiOutlineMessage size={28} />}
          </button>
        </div>

        <NaxaFooter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;