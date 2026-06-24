import { useState } from "react";

const Arajark = ({ className }) => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div  className={` ml-5 flex justify-between items-center w-full ${className || ""}`}>
      <h3 className="font-sans text-xl font-bold text-[#222]">
        Լավագույն առաջարկներ
      </h3>

      <div className="flex gap-4">
        <div
          onClick={() => setActiveId(1)}
          className={`cursor-pointer transition-colors duration-300 flex justify-center items-center rounded-[10px] h-[35px] w-[35px] border border-black ${
            activeId === 1 ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="https://amaranoc.am/images/offers/two-offers-per-row.svg"
            alt=""
            className={`transition-all duration-300 ${
              activeId === 1 ? "invert brightness-200" : ""
            }`}
          />
        </div>

        <div
          onClick={() => setActiveId(2)}
          className={`cursor-pointer transition-colors duration-300 flex justify-center items-center rounded-[10px] h-[35px] w-[35px] border border-black ${
            activeId === 2 ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="https://amaranoc.am/images/offers/two-offers-per-row.svg"
            alt=""
            className={`transition-all duration-300 ${
              activeId === 2 ? "invert brightness-200" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Arajark;