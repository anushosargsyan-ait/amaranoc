const Choose = () => {
  return (
    <section className="w-full min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* ՆԿԱՐԻ ԲԼՈԿ */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-auto rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm">
          <img
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Famaranoc.jpg&w=1920&q=75"
            alt="Լողավազան"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ՏԵՔՍՏԱՅԻՆ ԲԼՈԿ */}
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_40px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col justify-center">
          
          <h2 className="text-[#1a1a24] text-2xl sm:text-3xl lg:text-[38px] font-extrabold leading-[1.2] mb-6 sm:mb-8 tracking-tight">
            ԻՆՉՈՒ ՀԱՄԱԳՈՐԾԱԿՑԵԼ
            <br />
            AMARANOC.AM -ի ՀԵՏ
          </h2>

          <div className="relative pr-4 sm:pr-6">
            <p className="text-[#333333] text-[14px] sm:text-base leading-[1.8] font-medium text-justify">
              Amaranoc.am-ի ընտրությունը երաշխավորում է շքեղության,
              անհատականացված սպասարկման բարձր մակարդակ և իհարկե վստահության
              հիմքի վրա կառուցված կայուն համագործակցություն: Գերազանցության
              հանդեպ մեր բարձր ձգտումը և հավատարմությունը, էքսկլյուզիվ
              առաջարկների լայն ընտրությունը և մեր յուրաքանչյուր հյուրի
              նախասիրությունների նկատմամբ մանրակրկիտ ուշադրությունը մեզ
              առանձնացնում են ոլորտում բոլորից՝ դարձնելով առաջատար: Մենք
              առաջարկում ենք որակ և ստեղծում ենք
            </p>

            <div className="absolute right-0 top-1.5 w-[2px] h-[120px] sm:h-[160px] bg-[#1a1a24]"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Choose;