import { useState } from "react";

const bath = ["Բոլորը", "1", "2", "3+"];

const Bathroom = () => {
  const [active, setActive] = useState("Բոլորը");

  return (
    <div className="w-full border-t border-[#f0f0f0] pt-5">
      <h4 className="text-[16px] font-bold mb-4 text-[#111]">
        Սանհանգույցների քանակ
      </h4>
      <div className="flex flex-wrap gap-2 w-full">
        {bath.map((bathh, index) => {
          let shapeClass = "px-5 rounded-full";
          if (index === 1 || index === 2) shapeClass = "w-[46px] rounded-full";

          return (
            <div
              key={bathh}
              onClick={() => setActive(bathh)}
              className={`w-[75px] h-[46px] border flex items-center justify-center text-[15px] cursor-pointer transition-all duration-200 ${shapeClass} ${
                active === bathh
                  ? "bg-[#111] text-white border-[#111]"
                  : "bg-white border-[#ddd] text-[#555] hover:border-[#aaa]"
              }`}
            >
              {bathh}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bathroom;
