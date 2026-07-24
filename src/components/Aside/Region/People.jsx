import { useFilterStore } from "../../store/useFilterStore"; // Ստուգիր path-ը

const People = () => {
  // Zustand store-ից վերցնում ենք guestsCount-ն ու setGuestsCount-ը
  const { guestsCount, setGuestsCount } = useFilterStore();

  return (
    <div className="w-full pt-5 border-t border-[#f0f0f0]">
      <h4 className="text-[16px] font-bold mb-4 text-[#111]">
        Մարդկանց թույլատրելի քանակ
      </h4>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setGuestsCount(guestsCount > 1 ? guestsCount - 1 : 1)}
          className="h-11 w-11 rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#111] flex items-center justify-center text-xl cursor-pointer transition-colors border-none select-none"
        >
          −
        </button>
        <input
          value={guestsCount}
          className="text-center rounded-[12px] h-11 w-[70px] border border-[#ddd] text-[16px] font-medium outline-none"
          type="text"
          readOnly
        />
        <button
          onClick={() => setGuestsCount(guestsCount + 1)}
          className="h-11 w-11 rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#111] flex items-center justify-center text-xl cursor-pointer transition-colors border-none select-none"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default People;