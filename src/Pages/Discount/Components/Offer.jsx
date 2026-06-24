import { useState } from "react";

const arj = ["֏", "$", "€", "₽"];

const Offer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Стейты для ползунка цен
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(400000);
  const maxLimit = 1000000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 10000);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 10000);
    setMaxPrice(value);
  };

  const rangeInputClasses = `absolute w-full -top-1.5 h-1 appearance-none bg-transparent pointer-events-none 
    [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#f98b2d] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
    [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 
    [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#f98b2d] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer`;

  return (
    <>
      <div className="flex items-center justify-center gap-6 pt-20">
        <div className="w-[550px] h-[2px] bg-black flex-shrink-0"></div>
        <h1 className="text-5xl font-medium font-sans text-center whitespace-nowrap">
          Թեժ առաջարկներ
        </h1>
        <div className="w-[280px] h-[2px] bg-black flex-shrink-0"></div>
      </div>

      {/* Главная карточка с внутренними отступами p-8 и px-12 */}
      <div className="rounded-3xl w-[86%] border mt-[90px] ml-[105px] p-8 px-12">
        {/* Флекс-ряд: выстраивает левую и правую часть в одну линию */}
        <div className="flex items-end justify-between gap-16">
          {/* ЛЕВАЯ ЧАСТЬ: Выбор валюты */}
          <div className="flex-shrink-0">
            <p className="text-gray-700 font-medium mb-3">Տարադրամ</p>
            <div className="flex gap-4">
              {arj.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex justify-center items-center w-[42px] h-[42px] border rounded-full cursor-pointer transition-all duration-200 text-lg font-medium
                      ${
                        isActive
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Ползунок цен (занимает всё оставшееся место благодаря flex-1) */}
          <div className="flex-1 pb-3">
            <div className="relative w-full h-1 bg-gray-200 rounded-full">
              {/* Оранжевый лейбл МИН цены */}
              <div
                className="absolute -top-10 px-3 py-1 bg-[#f98b2d] text-white rounded-full text-sm font-medium -translate-x-1/2 whitespace-nowrap"
                style={{ left: `${(minPrice / maxLimit) * 100}%` }}
              >
                {minPrice.toLocaleString()} {arj[activeIndex]}
              </div>

              {/* Оранжевый лейбл МАКС цены */}
              <div
                className="absolute -top-10 px-3 py-1 bg-[#f98b2d] text-white rounded-full text-sm font-medium -translate-x-1/2 whitespace-nowrap"
                style={{ left: `${(maxPrice / maxLimit) * 100}%` }}
              >
                {maxPrice.toLocaleString()} {arj[activeIndex]}
              </div>

              {/* Активная оранжевая полоса */}
              <div
                className="absolute h-1 bg-[#f98b2d] rounded-full"
                style={{
                  left: `${(minPrice / maxLimit) * 100}%`,
                  right: `${100 - (maxPrice / maxLimit) * 100}%`,
                }}
              ></div>

              {/* Инпуты ползунка */}
              <input
                type="range"
                min="0"
                max={maxLimit}
                value={minPrice}
                onChange={handleMinChange}
                className={rangeInputClasses}
              />

              <input
                type="range"
                min="0"
                max={maxLimit}
                value={maxPrice}
                onChange={handleMaxChange}
                className={rangeInputClasses}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
