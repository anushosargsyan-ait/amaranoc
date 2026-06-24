const History = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <div className="w-full h-[400px] lg:h-auto rounded-3xl overflow-hidden">
          <img
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fhistory.jpg&w=1920&q=75"
            alt="Amaranoc.am պատմություն"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#fafafa] rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col justify-center border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-[2px] bg-[#1a1f2c]"></span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-[#1a1f2c]">
              Մեր Պատմությունը
            </h2>
            <div className="h-[2px] bg-[#1a1f2c] w-16 md:w-24"></div>
          </div>

          <p className="text-gray-700 leading-relaxed md:text-[17px] font-medium">
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
