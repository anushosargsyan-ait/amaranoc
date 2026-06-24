const Choose = () => {
  return (
    <section className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-[1200px] w-full grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-auto rounded-[24px] overflow-hidden">
          <img
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Famaranoc.jpg&w=1920&q=75"
            alt="Լողավազան"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white rounded-[24px] p-8 sm:p-12 lg:p-14 shadow-[0_4px_40px_rgb(0,0,0,0.03)] flex flex-col justify-center">
          <h2 className="text-[#1a1a24] text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.2] mb-8 tracking-tight">
            ԻՆՉՈՒ ՀԱՄԱԳՈՐԾԱԿՑԵԼ
            <br />
            AMARANOC.AM -ի ՀԵՏ
          </h2>

          <div className="relative pr-6">
            <p className="text-[#333333] text-[15px] sm:text-base leading-[1.8] font-medium text-justify">
              Amaranoc.am-ի ընտրությունը երաշխավորում է շքեղության,
              անհատականացված սպասարկման բարձր մակարդակ և իհարկե վստահության
              հիմքի վրա կառուցված կայուն համագործակցություն: Գերազանցության
              հանդեպ մեր բարձր ձգտումը և հավատարմությունը, էքսկլյուզիվ
              առաջարկների լայն ընտրությունը և մեր յուրաքանչյուր հյուրի
              նախասիրությունների նկատմամբ մանրակրկիտ ուշադրությունը մեզ
              առանձնացնում են ոլորտում բոլորից՝ դարձնելով առաջատար: Մենք
              առաջարկում ենք որակ և ստեղծում ենք
            </p>

            <div className="absolute right-0 top-1.5 w-[2px] h-[160px] bg-[#1a1a24]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
