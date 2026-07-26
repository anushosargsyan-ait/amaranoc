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
    <div className="w-full px-4 sm:px-6">
      {/* Վերնագիր և կողքի գծերը */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 pt-12 sm:pt-20">
        <div className="hidden sm:block w-[100px] md:w-[300px] lg:w-[550px] h-[2px] bg-black flex-shrink-0"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans text-center whitespace-nowrap">
          Թեժ առաջարկներ
        </h1>
        <div className="hidden sm:block w-[100px] md:w-[180px] lg:w-[280px] h-[2px] bg-black flex-shrink-0"></div>
      </div>

      {/* Գլխավոր քարտ (Responsive լայնությամբ և մարգիններով) */}
      <div className="w-full max-w-[1320px] mx-auto rounded-3xl border mt-8 sm:mt-[90px] p-6 sm:p-8 lg:px-12 shadow-sm bg-white">
        
        {/* Ֆլեքս-շարք: Մոբայլում իրար տակ (col), լայն էկրանին՝ կողք կողքի (row) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 pt-6 lg:pt-0">
          
          {/* ՁԱԽ ՄԱՍ: Տարադրամի ընտրություն */}
          <div className="flex-shrink-0">
            <p className="text-gray-700 font-medium mb-3 text-sm sm:text-base">Տարադրամ</p>
            <div className="flex gap-3 sm:gap-4">
              {arj.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex justify-center items-center w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] border rounded-full cursor-pointer transition-all duration-200 text-base sm:text-lg font-medium
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

          {/* ԱՋ ՄԱՍ: Գների սլայդեր */}
          <div className="flex-1 pb-3 w-full lg:max-w-[700px] mt-4 lg:mt-0">
            <div className="relative w-full h-1 bg-gray-200 rounded-full">
              {/* Օրանջեվի լեյբլ ՄԻՆ գնի */}
              <div
                className="absolute -top-10 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#f98b2d] text-white rounded-full text-xs sm:text-sm font-medium -translate-x-1/2 whitespace-nowrap shadow-sm"
                style={{ left: `${(minPrice / maxLimit) * 100}%` }}
              >
                {minPrice.toLocaleString()} {arj[activeIndex]}
              </div>

              {/* Օրանջեվի լեյբլ ՄԱԿՍ գնի */}
              <div
                className="absolute -top-10 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#f98b2d] text-white rounded-full text-xs sm:text-sm font-medium -translate-x-1/2 whitespace-nowrap shadow-sm"
                style={{ left: `${(maxPrice / maxLimit) * 100}%` }}
              >
                {maxPrice.toLocaleString()} {arj[activeIndex]}
              </div>

              {/* Ակտիվ օրանջեվի գիծ */}
              <div
                className="absolute h-1 bg-[#f98b2d] rounded-full"
                style={{
                  left: `${(minPrice / maxLimit) * 100}%`,
                  right: `${100 - (maxPrice / maxLimit) * 100}%`,
                }}
              ></div>

              {/* Ինպուտներ սլայդերի */}
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
    </div>
  );
};

export default Offer;