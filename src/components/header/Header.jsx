import React, { useState } from "react";
import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderText from "./HeaderText/HeaderText";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-[70px] lg:h-[90px] bg-white border-b border-[#eaeaea] select-none sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto h-full flex items-center justify-between px-4 xl:px-[20px] gap-4">
        
        {/* 1. Ձախում՝ Burger կոճակը (միայն հեռախոսների համար) և Լոգոն */}
        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg hover:bg-gray-100 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

          <HeaderLogo />
        </div>

        {/* 2. Մեջտեղում՝ Նավիգացիան (Desktop-ում) */}
        <div className="hidden lg:flex items-center justify-center">
          <HeaderText />
        </div>

        {/* 3. Աջում՝ Իքոններն ու Search-ը */}
        <div className="shrink-0 flex items-center">
          <HeaderEnd />
        </div>

      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-white border-b border-[#eaeaea] shadow-lg py-4 px-6 flex flex-col gap-4 transition-all animate-fadeIn">
          <div onClick={() => setIsMobileMenuOpen(false)}>
            <HeaderText />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;