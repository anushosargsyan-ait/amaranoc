import { useState } from "react";
import { FiGlobe, FiUser, FiSearch } from "react-icons/fi";

const HeaderEnd = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    /* 🔴 1. Mobile-ում gap-1.5, sm-ից սկսած gap-4 կամ gap-5 */
    <div className="flex items-center gap-1.5 sm:gap-4">
      
      {/* 1. ԼԵԶՎԻ ԻԿՈՆԱ */}
      <button 
        className="text-gray-700 hover:text-black text-[18px] sm:text-[20px] p-1.5 transition-colors cursor-pointer shrink-0"
        title="Ընտրել լեզուն"
      >
        <FiGlobe />
      </button>

      {/* 2. USER / PROFILE ԻԿՈՆԱ */}
      <button 
        className="text-gray-700 hover:text-black text-[18px] sm:text-[20px] p-1.5 transition-colors cursor-pointer shrink-0"
        title="Մուտք / Պրոֆիլ"
      >
        <FiUser />
      </button>

      {/* 3. ՈՐՈՆՄԱՆ INPUT (SEARCH BOX) */}
      <div className="relative flex items-center min-w-0">
        <input
          type="text"
          placeholder="Որոնում"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          /* 🔴 2. Mobile-ում w-[110px] կամ w-[130px], sm-ում w-[180px], lg-ում w-[240px] */
          className="w-[110px] xs:w-[130px] sm:w-[180px] lg:w-[240px] h-[36px] sm:h-[40px] pl-3 sm:pl-4 pr-8 sm:pr-10 border border-gray-300 rounded-full text-[12px] sm:text-[14px] outline-none focus:border-gray-500 transition-all placeholder:text-gray-400"
        />
        <FiSearch className="absolute right-2.5 sm:right-3.5 text-gray-500 text-[15px] sm:text-[18px] pointer-events-none" />
      </div>
    </div>
  );
};

export default HeaderEnd;