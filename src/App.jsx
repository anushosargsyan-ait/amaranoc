import React, { useState } from "react"; 
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

// Չաթն ու իր իկոնները
import Chat from "./components/Chat"; 
import { IoCloseOutline } from "react-icons/io5"; 
import { AiOutlineMessage } from "react-icons/ai"; 

// Քարտեզի Modal-ը
import MapModal from "./components/MapModal"; 

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen text-[#1a1a1a] relative">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-[1320px] mx-auto px-[15px] xl:px-[20px] flex items-start gap-[30px] mt-[15px] lg:mt-[30px] mb-[50px]">
                
                {/* 👈 Mobile-ում hidden է, Desktop-ում (lg:block) ցույց է տալիս Aside-ը */}
                <div className="hidden lg:block flex-shrink-0 w-[280px]">
                  <Aside />
                </div>

                {/* 👈 Mobile-ում Main-ը զբաղեցնում է 100% լայնություն */}
                <div className="flex-1 w-full overflow-hidden">
                  <Main onMapOpen={() => setIsMapOpen(true)} />
                </div>

              </div>
            }
          />

          <Route path="/discounts" element={<Discounts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Info />} />
          <Route path="/house/:id" element={<HouseDetails />} />
        </Routes>

        {/* ՔԱՐՏԵԶԻ MODAL-Ը */}
        <MapModal 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)} 
        />

        {/* ՉԱԹԻ ԼՈՂԱՑՈՂ ԿՈՃԱԿԸ ԵՎ ՊԱՏՈՒՀԱՆԸ */}
        <div className="fixed bottom-[25px] right-[25px] z-[9999] flex flex-col items-end gap-[10px]">
          <Chat isOpen={isChatOpen} />

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