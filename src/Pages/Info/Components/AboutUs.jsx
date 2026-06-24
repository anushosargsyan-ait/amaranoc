const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-10 p-6 md:p-12 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2">
        <img
          src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout_us.jpg&w=1920&q=75"
          alt="About Us"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
        <div className="flex items-center mb-8">
          <span className="text-2xl font-bold mr-4 text-gray-900">-</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wide uppercase text-gray-900 whitespace-nowrap">
            Մեր Մասին
          </h2>
          <div className="h-0.5 bg-gray-900 w-24 md:w-32 ml-6"></div>
        </div>

        <div className="pr-6 md:pr-10 border-r-[1.5px] border-gray-900 text-gray-800 leading-relaxed text-sm md:text-base font-medium">
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
