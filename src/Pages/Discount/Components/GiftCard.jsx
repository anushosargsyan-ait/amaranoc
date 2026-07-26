import { useState } from "react";

const GiftCard = () => {
  const prices = [
    "50,000 ֏",
    "60,000 ֏",
    "70,000 ֏",
    "80,000 ֏",
    "90,000 ֏",
    "100,000 ֏",
  ];
  const [selectedPrice, setSelectedPrice] = useState("50,000 ֏");

  return (
    <section className="w-full px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-[1320px] mx-auto">
        
        {/* ՁԱԽ ՄԱՍ: Տեքստային բլոկ */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-wide leading-tight">
            ՊԱՏՎԻՐԻ՛Ր <span className="text-[#ff8a22]">ՆՎԵՐ ՔԱՐՏ</span> <br />
            ՔՈ ԿԱՄ ԸՆԿԵՐԵՐԻԴ ՀԱՄԱՐ
          </h2>

          <hr className="border-t border-gray-200 my-6 w-full" />

          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
            Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ
            արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային
            քարտերը առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և
            ծառայությունների լայն տեսականիով։ Ընտրիր զեղչի չափը քարտի վրա։
          </p>
        </div>

        {/* ԱՋ ՄԱՍ: Նվեր քարտի վիզուալ հատված */}
        <div className="bg-gradient-to-br from-[#ff9331] via-[#f37c13] to-[#e46b00] rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between items-center text-white shadow-lg min-h-[380px]">
          
          {/* Լոգո */}
          <div className="text-center mt-2 select-none">
            <div className="text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.25em] flex items-center justify-center font-sans">
              AMARAN
              <span className="inline-flex flex-col items-center justify-center mx-1 bg-white text-[#f37c13] px-1.5 py-0.5 rounded font-black text-sm sm:text-base relative bottom-0.5">
                Հ
              </span>
              C.AM
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.4em] opacity-90 uppercase mt-1 font-mono">
              by hasce.am
            </div>
          </div>

          {/* Գների կոճակների ցանց (Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full my-6 max-w-md">
            {prices.map((price, index) => (
              <button
                key={index}
                onClick={() => setSelectedPrice(price)}
                className={`border border-white/60 rounded-full py-2.5 px-3 text-sm sm:text-base font-bold text-center tracking-wide transition-all duration-200 cursor-pointer outline-none
                  ${
                    selectedPrice === price
                      ? "bg-white text-[#f37c13] border-white shadow-md scale-105"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
              >
                {price}
              </button>
            ))}
          </div>

          {/* Պատվիրել կոճակ */}
          <button className="w-full sm:w-auto bg-[#ff9d3b] hover:bg-[#ffaa4d] text-white font-bold text-base px-10 py-3 rounded-full shadow-md transition-all transform active:scale-95 cursor-pointer border border-white/20">
            Պատվիրել
          </button>

        </div>

      </div>
    </section>
  );
};

export default GiftCard;