import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-14 mb-14 font-sans">
      <button
        className="flex justify-center items-center bg-transparent border-none text-[22px] text-[#222] cursor-pointer p-2 transition-all duration-200 disabled:text-[#b0b0b0] disabled:cursor-default"
        disabled
      >
        <FiArrowLeft />
      </button>

      <div className="flex justify-center items-center w-12 h-12 rounded-full text-[18px] cursor-pointer transition-colors duration-200 bg-[#fca34d] text-white">
        1
      </div>
      <div className="flex justify-center items-center w-12 h-12 rounded-full text-[18px] text-[#222] cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0]">
        2
      </div>
      <div className="flex justify-center items-center w-12 h-12 rounded-full text-[18px] text-[#222] cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0]">
        3
      </div>

      <div className="flex justify-center items-end h-12 pb-3 text-[18px] text-[#222] tracking-[2px] select-none">
        ...
      </div>

      <div className="flex justify-center items-center w-12 h-12 rounded-full text-[18px] text-[#222] cursor-pointer transition-colors duration-200 hover:bg-[#f0f0f0]">
        29
      </div>

      <button className="flex justify-center items-center bg-transparent border-none text-[22px] text-[#222] cursor-pointer p-2 transition-all duration-200 hover:text-[#fca34d] hover:scale-110">
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Page;
