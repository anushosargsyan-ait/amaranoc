import { useState } from "react";

const Arajark = ({ className }) => {
  const [activeId, setActiveId] = useState(1);

  return (
    /* 🔴 1. Հեռացվել է ml-5-ը, ավելացվել է px-4 (mobile) ու sm:px-0, որպեսզի էկրանից դուրս չգա */
    <div className={`flex justify-between items-center w-full px-4 sm:px-0 my-4 ${className || ""}`}>
      {/* 🔴 2. Տեքստի չափսը mobile-ում text-lg է, desktop-ում՝ text-xl */}
      <h3 className="font-sans text-lg sm:text-xl font-bold text-[#222]">
        Լավագույն առաջարկներ
      </h3>

      {/* 🔴 3. Mobile էկրաններում (որտեղ միշտ 1 քարտ է) այս view selector-ը կարելի է թաքցնել կամ թողնել sm:flex */}
      <div className="flex gap-2 sm:gap-4">
        <div
          onClick={() => setActiveId(1)}
          className={`cursor-pointer transition-colors duration-300 flex justify-center items-center rounded-[10px] h-[32px] w-[32px] sm:h-[35px] sm:w-[35px] border border-black ${
            activeId === 1 ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="https://amaranoc.am/images/offers/two-offers-per-row.svg"
            alt=""
            className={`w-4 h-4 sm:w-auto sm:h-auto transition-all duration-300 ${
              activeId === 1 ? "invert brightness-200" : ""
            }`}
          />
        </div>

        <div
          onClick={() => setActiveId(2)}
          className={`cursor-pointer transition-colors duration-300 flex justify-center items-center rounded-[10px] h-[32px] w-[32px] sm:h-[35px] sm:w-[35px] border border-black ${
            activeId === 2 ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="https://amaranoc.am/images/offers/two-offers-per-row.svg"
            alt=""
            className={`w-4 h-4 sm:w-auto sm:h-auto transition-all duration-300 ${
              activeId === 2 ? "invert brightness-200" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Arajark;