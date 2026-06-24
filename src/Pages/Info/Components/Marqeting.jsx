function Marqeting() {
  return (
    <section className="flex justify-center p-6 bg-white w-full">
      <div className="flex flex-col lg:flex-row max-w-[1200px] w-full gap-6 md:gap-8 items-stretch">
        <div className="flex-1 lg:w-[45%] bg-[#FCFCFC] rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 border border-gray-100 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-[2px] bg-gray-800"></div>{" "}
            <h2 className="text-[#15172A] text-2xl md:text-3xl font-black uppercase tracking-wider font-sans">
              Մարքեթինգ
            </h2>
            <div className="flex-1 h-[1px] bg-gray-400"></div>{" "}
          </div>

          <p className="text-[#3a3b45] text-[15px] md:text-[16px] leading-[1.9] font-medium text-left">
            Amaranoc.am-ում մենք գիտակցում ենք մարքեթինգի առանցքային դերը
            ամառանոցների վարձակալության ոլորտում։ Մեր ռազմավարական մարքեթինգային
            նախաձեռնությունները ներառում են էքսկլյուզիվ համագործակցություններ և
            շեշտադրում են մեր ամառանոցների եզակի առանձնահատկությունները։ 10
            մասնագետից բաղկացած մեր պրոֆեսիոնալ մարքեթինգի թիմը աշխատում է բարձր
            պատասխանատվությամբ և նվիրումով, որպեսզի դուք միշտ առաջինը տեղեկացված
            լինեք լավագույն առաջարկների մասին։
          </p>
        </div>

        <div className="flex-1 lg:w-[55%]">
          <img
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fmarketing.jpg&w=1920&q=75"
            alt="Marketing presentation"
            className="w-full h-full object-cover rounded-[32px] min-h-[350px] md:min-h-[450px] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default Marqeting;
