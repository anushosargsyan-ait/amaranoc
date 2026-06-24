import { useState } from "react";

const NightPresence = () => {
  const [active, setActive] = useState("all");

  const btnBase =
    "w-[85px] h-[46px] rounded-[15px] flex items-center justify-center cursor-pointer transition-all duration-200 text-[15px] font-medium border";

  return (
    <div className="w-full pt-5 border-t border-[#f0f0f0]">
      <h4 className="text-[16px] font-bold mb-4 text-[#111]">
        Գիշերակացի առկայություն
      </h4>
      <div className="flex flex-wrap gap-3">
        <div
          onClick={() => setActive("all")}
          className={`${btnBase} ${
            active === "all"
              ? "bg-[#111] text-white border-[#111]"
              : "border-[#ddd] text-[#555] hover:border-[#aaa]"
          }`}
        >
          Բոլորը
        </div>
        <div
          onClick={() => setActive("yes")}
          className={`${btnBase} ${
            active === "yes"
              ? "bg-[#111] text-white border-[#111]"
              : "border-[#ddd] text-[#555] hover:border-[#aaa]"
          }`}
        >
          Այո
        </div>
        <div
          onClick={() => setActive("no")}
          className={`${btnBase} ${
            active === "no"
              ? "bg-[#111] text-white border-[#111]"
              : "border-[#ddd] text-[#555] hover:border-[#aaa]"
          }`}
        >
          Ոչ
        </div>
      </div>
    </div>
  );
};

export default NightPresence;
