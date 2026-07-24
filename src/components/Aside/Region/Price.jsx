import { useFilterStore } from "../../store/useFilterStore"; // Ստուգիր path-ը

const arr = ["֏", "$", "€", "₽"];
const currencyCodes = ["AMD", "USD", "EUR", "RUB"]; // Յուրաքանչյուր նշանին համապատասխան կոդը

const Price = ({ plc1 = "Սկսած", plc2 = "Մինչև" }) => {
  // Zustand store-ից վերցնում ենք անհրաժեշտ state-երը և action-ները
  const { currency, setCurrency, priceRange, setPriceRange } = useFilterStore();

  return (
    <div className="w-full border-t border-[#f0f0f0] pt-5">
      <div className="flex justify-between items-center w-full mb-4">
        <h4 className="text-[16px] font-bold text-[#111] m-0">Արժեք</h4>
        <div className="flex gap-2 m-0">
          {arr.map((valute, index) => {
            const isSelected = currency === currencyCodes[index];

            return (
              <div
                key={index}
                className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer font-medium text-[14px] transition-all duration-200 ${
                  isSelected
                    ? "bg-[#111] text-white"
                    : "bg-white border border-[#ddd] text-[#555] hover:border-[#aaa]"
                }`}
                onClick={() => setCurrency(currencyCodes[index])}
              >
                {valute}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 w-full">
        <input
          placeholder={plc1}
          type="number"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ min: e.target.value })}
          className="w-28 px-3 h-[44px] border border-[#ddd] rounded-[12px] text-[14px] outline-none focus:border-[#111] transition-colors"
        />
        <span className="text-[#888] font-medium">-</span>
        <input
          placeholder={plc2}
          type="number"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ max: e.target.value })}
          className="w-28 px-3 h-[44px] border border-[#ddd] rounded-[12px] text-[14px] outline-none focus:border-[#111] transition-colors"
        />
      </div>
    </div>
  );
};

export default Price;