const OurTeam = () => {
  return (
    <section className="w-full min-h-screen bg-[#f8f9fa] p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-[1320px] w-full flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
        
        {/* ՁԱԽ ՄԱՍ: Տեքստային բլոկ */}
        <div className="flex-1 bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col justify-center">
          
          {/* Վերնագիր և գծեր */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-4 sm:w-8 h-[2px] bg-gray-300"></div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-black text-[#1a1a1a] uppercase tracking-wide whitespace-nowrap">
              ՄԵՐ ԹԻՄԸ
            </h2>
            <div className="flex-1 h-[2px] bg-gray-300"></div>
          </div>

          {/* Նկարագրություն */}
          <div className="border-l-[3px] border-[#2b2b2b] pl-4 sm:pl-6 py-1">
            <p className="text-[#4a4a4a] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-justify font-medium">
              բավարարելու առկա աննախադեպ հաճախորդի կարիքները: Շնորհիվ ոլորտում
              ունեցած մեր անգնահատելի փորձի, մեր նպատակն է անմոռանալի պահեր
              ստեղծել մեր հյուրերի համար: Մենք պարզապես չենք ստեղծում ժամանց,
              մենք ստեղծում ենք պատմություններ, և յուրաքանչյուր առանձնատուն
              (որոնք դուք տեսնում եք մեր կայքում) այդ պատմության մի մասն է:
              Օրեցօր ընդլայնվելով՝ մենք ձգտում ենք նորագույն չափանիշներ սահմանել
              ոլորտում և որ ամենակարևորն է մենք օր օրի հստակ ու կայուն քայլերով
              շարժվում ենք առաջ՝ բարելավելով մեր երկրում սպասարկման ոլորտը՝ շքեղ
              առանձնատները հասանելի դարձնելով բոլորին։
            </p>
          </div>

        </div>

        {/* ԱՋ ՄԱՍ: Նկար */}
        <div className="flex-[1.2] w-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]">
          <img
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fteam.jpg&w=1920&q=75"
            alt="Մեր թիմը"
            className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default OurTeam;