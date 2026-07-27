import { useState } from "react";
import { FiGlobe, FiUser, FiSearch } from "react-icons/fi";
import HeaderEnd3 from "./HeaderEnd3";

const HeaderEnd = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      
      {/* 1. ԼԵԶՎԻ ԻԿՈՆԱ */}
      <button 
        type="button"
        className="text-gray-700 hover:text-black text-[18px] sm:text-[20px] p-1 transition-colors cursor-pointer shrink-0 bg-transparent border-none"
        title="Ընտրել լեզուն"
        onClick={() => console.log("Language clicked")}
      >
        <FiGlobe />
      </button>

      {/* 2. USER / PROFILE ԻԿՈՆԱ */}
      <button 
        type="button"
        className="text-gray-700 hover:text-black text-[18px] sm:text-[20px] p-1 transition-colors cursor-pointer shrink-0 bg-transparent border-none"
        title="Մուտք / Պրոֆիլ"
        onClick={() => console.log("User clicked")}
      >
        <FiUser />
      </button>

      {/* 3. ՈՐՈՆՄԱՆ INPUT (Թաքցված է հեռախոսների վրա, բացվում է սկսած sm չափից) */}
      <div className="hidden sm:flex items-center">
        <HeaderEnd3
          place="Որոնում"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[150px] lg:w-[240px] h-[36px] lg:h-[40px] pl-4 pr-10 border border-gray-300 rounded-full text-[14px] focus:border-gray-500 placeholder:text-gray-400"
        >
          <button 
            type="button"
            className="absolute right-3.5 text-gray-500 text-[18px] pointer-events-none bg-transparent border-none flex items-center justify-center"
          >
            <FiSearch />
          </button>
        </HeaderEnd3>
      </div>

    </div>
  );
};

export default HeaderEnd;