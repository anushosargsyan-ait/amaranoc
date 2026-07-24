import { regionsList } from "./regionsData";
import { useFilterStore } from "../../store/useFilterStore"; // Ստուգիր path-ը

const Region = () => {
  // Zustand store-ից վերցնում ենք selectedRegions-ն ու toggleRegion action-ը
  const { selectedRegions, toggleRegion } = useFilterStore();

  return (
    <div className="w-full">
      <h3 className="text-[16px] font-bold text-[#111] mb-4">Տարածաշրջան</h3>
      <div className="h-[220px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[2px]">
        {regionsList.map((region, index) => {
          // Յուրաքանչյուր region-ի համար ստուգում ենք՝ արդյոք ընտրված է
          const isChecked = selectedRegions.includes(region);

          return (
            <p key={index} className="flex items-center gap-3 mb-3.5">
              <input
                type="checkbox"
                id={`region-${index}`}
                checked={isChecked}
                onChange={() => toggleRegion(region)}
                className="cursor-pointer w-4 h-4 rounded border-gray-300 accent-[#111]"
              />
              <label
                htmlFor={`region-${index}`}
                className="cursor-pointer text-[15px] text-[#444]"
              >
                {region}
              </label>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Region;