const NaxaFooter = () => {
  return (
    <div 
      className="relative top-[50px] lg:top-[100px] w-full min-h-[550px] lg:h-[600px] bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')" }}
    >
      {/* Կենտրոնական բլոկ՝ Flex-ով ու responsive չափսերով (абсолюט-ի փոխարեն հարմարեցված ճկուն layout) */}
      <div className="w-full max-w-[1000px] bg-[rgba(30,40,35,0.65)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.15)] rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-6 sm:p-8 flex flex-col justify-between items-center text-center">
        
        {/* Заголовок (Responsive տեքստով և հարմարեցված գծիկներով) */}
        <h1 className="text-white text-[18px] sm:text-[24px] lg:text-[32px] font-bold w-full flex items-center justify-center gap-2 sm:gap-4 my-2 before:content-[''] before:h-[2px] before:w-[40px] sm:before:w-[80px] lg:before:w-[120px] before:bg-white after:content-[''] after:h-[2px] after:w-[40px] sm:after:w-[80px] lg:after:w-[120px] after:bg-white">
          ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ
        </h1>
        
        {/* Параграф */}
        <p className="text-white text-[13px] sm:text-[14px] lg:text-[15px] w-full max-w-[700px] my-4 px-2">
          Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
        </p>
        
        {/* Контейнер для инпутов: Mobile-ում իրար տակ (flex-col), Desktop-ում իրար կողք (grid) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          
          <input 
            placeholder="Անուն Ազգանուն" 
            type="text" 
            className="w-full h-[45px] sm:h-[50px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.3)] rounded-[8px] indent-[15px] text-white text-[14px] outline-none transition-all duration-300 placeholder-[rgba(255,255,255,0.6)] focus:border-white focus:bg-[rgba(0,0,0,0.6)]"
          />
          
          <input 
            placeholder="Հեռախոսահամար" 
            type="text" 
            className="w-full h-[45px] sm:h-[50px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.3)] rounded-[8px] indent-[15px] text-white text-[14px] outline-none transition-all duration-300 placeholder-[rgba(255,255,255,0.6)] focus:border-white focus:bg-[rgba(0,0,0,0.6)]"
          />
          
          <input 
            placeholder="Էլ հասցե" 
            type="text" 
            className="w-full h-[45px] sm:h-[50px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.3)] rounded-[8px] indent-[15px] text-white text-[14px] outline-none transition-all duration-300 placeholder-[rgba(255,255,255,0.6)] focus:border-white focus:bg-[rgba(0,0,0,0.6)]"
          />
          
          <button className="w-full h-[45px] sm:h-[50px] bg-[#f7941d] text-white border-none rounded-[25px] text-[16px] font-bold cursor-pointer transition-all duration-300 hover:bg-[#e08316] active:scale-95 shadow-md">
            Ուղարկել
          </button>

        </div>

      </div>
    </div>
  );
};

export default NaxaFooter;