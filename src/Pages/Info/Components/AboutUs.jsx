const AboutUs = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row items-stretch gap-6 md:gap-10 p-4 sm:p-6 md:p-12">
      
      {/* ՆԿԱՐԻ ԲԼՈԿ */}
      <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-auto">
        <img
          src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout_us.jpg&w=1920&q=75"
          alt="About Us"
          className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] shadow-sm"
        />
      </div>

      {/* ՏԵՔՍՏԱՅԻՆ ԲԼՈԿ */}
      <div className="w-full lg:w-1/2 bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center border border-gray-50">
        
        {/* Վերնագիր և գծեր */}
        <div className="flex items-center mb-6 sm:mb-8">
          <span className="text-xl sm:text-2xl font-bold mr-3 sm:mr-4 text-gray-900">-</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide uppercase text-gray-900 whitespace-nowrap">
            Մեր Մասին
          </h2>
          <div className="h-0.5 bg-gray-900 flex-1 ml-4 sm:ml-6"></div>
        </div>

        {/* Նկարագրություն */}
        <div className="pr-4 sm:pr-6 md:pr-10 border-r-[1.5px] border-gray-900 text-gray-800 leading-relaxed text-sm md:text-base font-medium text-justify">
          <p>
            Amaranoc.am-ը վստահության, հավատարմության և գերազանցության ձգտման
            պատմություն է։ Հանդիսանալով ամառանոցների վարձակալության ոլորտում
            համար մեկ ընկերությունը, մենք ձեզ առաջարկում ենք շքեղ առանձնատների,
            քոթեջների, վիլլաների և ամառանոցների լայն ու բազմազան ընտրություն։
            Մեր հիմնական առաքելությունն է սպասարկել մեր հաճախորդներին ամենաբարձր
            մակարդակով՝ ստեղծելով հարմարավետության և շքեղության մթնոլորտ մեր
            յուրաքանչյուր առանձնատանը։ Մեր նվիրվածությունը և մանրուքների հանդեպ
            ուշադրությունը երաշխավորում է հիշարժան հանգիստ...
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;