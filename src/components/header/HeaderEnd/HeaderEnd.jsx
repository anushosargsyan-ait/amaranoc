import { useState } from "react";
import { FiGlobe, FiUser, FiSearch } from "react-icons/fi";

const HeaderEnd = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center gap-5">
      {/* 1. ԼԵԶՎԻ ԻԿՈՆԱ */}
      <button 
        className="text-gray-700 hover:text-black text-[20px] p-1 transition-colors cursor-pointer"
        title="Ընտրել լեզուն"
      >
        <FiGlobe />
      </button>

      {/* 2. USER / PROFILE ԻԿՈՆԱ */}
      <button 
        className="text-gray-700 hover:text-black text-[20px] p-1 transition-colors cursor-pointer"
        title="Մուտք / Պրոֆիլ"
      >
        <FiUser />
      </button>

      {/* 3. ՈՐՈՆՄԱՆ INPUT (SEARCH BOX) */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Որոնում"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[200px] lg:w-[240px] h-[40px] pl-4 pr-10 border border-gray-300 rounded-full text-[14px] outline-none focus:border-gray-500 transition-all placeholder:text-gray-400"
        />
        <FiSearch className="absolute right-3.5 text-gray-500 text-[18px] pointer-events-none" />
      </div>
    </div>
  );
};

export default HeaderEnd;