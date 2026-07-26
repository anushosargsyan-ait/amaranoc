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

// Ֆիլտրի Drawer-ի և Slider-ի իկոնները
import { FiSliders, FiX } from "react-icons/fi";

// Քարտեզի Modal-ը
import MapModal from "./components/MapModal"; 

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  /* 🔴 Mobile Ֆիլտրի State */
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen text-[#1a1a1a] relative">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-[1320px] mx-auto px-[15px] xl:px-[20px] mt-[15px] lg:mt-[30px] mb-[50px]">
                
                {/* 🔴 Mobile "Ֆիլտրեր" կոճակը՝ ճիշտ Main-ի կոճակների չափսերով ու տեսքով */}
                <div className="lg:hidden w-full mb-[-10px] flex justify-start">
                  <button
                    type="button"
                    onClick={() => setIsFilterOpen(true)}
                    className="flex items-center gap-2 h-[38px] px-4 bg-white border border-black rounded-full text-xs font-semibold hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shadow-sm"
                  >
                    <FiSliders className="text-sm text-[#f08c28]" />
                    <span>Ֆիլտրեր</span>
                  </button>
                </div>

                <div className="flex items-start gap-[30px]">
                  {/* 💻 Desktop Aside-ը (Mobile-ում hidden) */}
                  <div className="hidden lg:block flex-shrink-0 w-[280px]">
                    <Aside />
                  </div>

                  {/* 👈 Main բովանդակությունը (Քո Main.jsx-ը՝ ԱՆՓՈՓՈԽ) */}
                  <div className="flex-1 w-full min-w-0 overflow-hidden">
                    <Main onMapOpen={() => setIsMapOpen(true)} />
                  </div>
                </div>

                {/* 📱 Mobile Drawer Menu (Բացվող Ֆիլտրի մենյուն) */}
                {isFilterOpen && (
                  <div className="fixed inset-0 z-[9999] lg:hidden flex">
                    {/* Dark Backdrop */}
                    <div 
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                      onClick={() => setIsFilterOpen(false)}
                    />

                    {/* Drawer Pane */}
                    <div className="relative z-10 w-[85%] max-w-[340px] h-full bg-white flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="font-bold text-lg text-gray-800">Ֆիլտրեր</h3>
                        <button 
                          type="button"
                          onClick={() => setIsFilterOpen(false)}
                          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 cursor-pointer"
                        >
                          <FiX className="text-xl" />
                        </button>
                      </div>

                      {/* Body (Քո <Aside />-ը) */}
                      <div className="flex-1 overflow-y-auto p-4">
                        <Aside />
                      </div>

                      {/* Footer */}
                      <div className="p-4 border-t border-gray-200 bg-white">
                        <button
                          type="button"
                          onClick={() => setIsFilterOpen(false)}
                          className="w-full py-3 bg-[#f08c28] text-white font-bold rounded-xl active:scale-95 transition-all shadow-md cursor-pointer"
                        >
                          Կիրառել
                        </button>
                      </div>

                    </div>
                  </div>
                )}

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
            type="button"
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