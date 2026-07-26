import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Page = () => {
  return (
    /* 🔴 1. Փոքրացրել ենք gap-ը mobile-ում (gap-1.5) և margin-ները (my-8 sm:my-14) */
    <div className="flex items-center justify-center gap-1.5 sm:gap-3 my-8 sm:my-14 font-sans w-full max-w-full overflow-hidden px-2">
      {/* Ձախ սլաք */}
      <button
        className="flex justify-center items-center bg-transparent border-none text-[18px] sm:text-[22px] text-[#222] cursor-pointer p-1.5 sm:p-2 transition-all duration-200 disabled:text-[#b0b0b0] disabled:cursor-default"
        disabled
      >
        <FiArrowLeft />
      </button>

      {/* Էջ 1 — 🔴 2. Mobile-ում w-8 h-8 (32px), desktop-ում sm:w-11 sm:h-11 */}
      <div className="flex justify-center items-center w-8 h-8 sm:w-11 sm:h-11 rounded-full text-[14px] sm:text-[18px] cursor-pointer transition-colors duration-200 bg-[#fca34d] text-white font-medium shrink-0">
        1
      </div>

      {/* Էջ 2 */}
      <div className="flex justify-center items-center w-8 h-8 sm:w-11 sm:h-11 rounded-full text-[14px] sm:text-[18px] text-[#222] cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0] shrink-0">
        2
      </div>

      {/* Էջ 3 — 🔴 3. Շատ նեղ էկրանների (<400px) վրա սա թաքցնում ենք, որպեսզի UI-ն չկոտրվի */}
      <div className="hidden min-[400px]:flex justify-center items-center w-8 h-8 sm:w-11 sm:h-11 rounded-full text-[14px] sm:text-[18px] text-[#222] cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0] shrink-0">
        3
      </div>

      {/* Բազմակետեր */}
      <div className="flex justify-center items-center h-8 sm:h-11 text-[14px] sm:text-[18px] text-[#222] tracking-[1px] select-none px-1">
        ...
      </div>

      {/* Վերջին էջ (29) */}
      <div className="flex justify-center items-center w-8 h-8 sm:w-11 sm:h-11 rounded-full text-[14px] sm:text-[18px] text-[#222] cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0] shrink-0">
        29
      </div>

      {/* Աջ սլաք */}
      <button className="flex justify-center items-center bg-transparent border-none text-[18px] sm:text-[22px] text-[#222] cursor-pointer p-1.5 sm:p-2 transition-all duration-200 hover:text-[#fca34d] active:scale-110">
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Page;