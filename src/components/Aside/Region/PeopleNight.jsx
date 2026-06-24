import { useState } from "react";

const PeopleNight = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="w-full border-t border-[#f0f0f0] pt-5">
      <h4 className="text-[16px] font-bold mb-4 text-[#111] leading-relaxed">
        Մարդկանց թույլատրելի քանակը գիշերակացով
      </h4>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setNum((prev) => (prev > 1 ? prev - 1 : 1))}
          className="h-11 w-11 rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#111] flex items-center justify-center text-xl cursor-pointer transition-colors border-none"
        >
          −
        </button>
        <input
          value={num}
          className="text-center rounded-[12px] h-11 w-[70px] border border-[#ddd] text-[16px] font-medium outline-none"
          type="text"
          readOnly
        />
        <button
          onClick={() => setNum((prev) => prev + 1)}
          className="h-11 w-11 rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#111] flex items-center justify-center text-xl cursor-pointer transition-colors border-none"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PeopleNight;
