const History = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* ՆԿԱՐԻ ԲԼՈԿ */}
        <div className="w-full h-[320px] sm:h-[400px] lg:h-auto rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm">
          <img
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fhistory.jpg&w=1920&q=75"
            alt="Amaranoc.am պատմություն"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ՏԵՔՍՏԱՅԻՆ ԲԼՈԿ */}
        <div className="bg-[#fafafa] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center border border-gray-100 shadow-sm">
          
          {/* Վերնագիր և գծեր */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="w-2 sm:w-4 h-[2px] bg-[#1a1f2c]"></span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide text-[#1a1f2c] whitespace-nowrap">
              Մեր Պատմությունը
            </h2>
            <div className="h-[2px] bg-[#1a1f2c] flex-1"></div>
          </div>

          {/* Պատմության տեքստ */}
          <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[17px] font-medium text-justify">
            Amaranoc.am - ը հիմնադրվել է 2023 թվականի հուլիսի 1-ին և հենց այդ
            օրվանից սկսած մինչ օրս մենք չենք դադարում զարմացնել մեր
            հաճախորդներին և գոհացնել մեր գործընկերներին: Մենք հպարտ ենք, որ այս
            նախագիծը մեր ողջ թիմի համատեղ ջանքերի արդյունքն է և հանդիսանում է
            Hasce.am անշարժ գույքի ընկերության ամենակարևոր մաս: Յուրաքանչյուր
            քայլ ամրապնդել է մեր հիմնադիր սկզբունքները և առաջ է մղել մեզ ձեռք
            բերել անուն, որին վստահում են բոլորը: Եվ եթե դուք այստեղ եք,
            հավատացած եղեք, որ ամեն ինչ դեռ առջևում է:
          </p>

        </div>

      </div>  
    </section>
  );
};

export default History;