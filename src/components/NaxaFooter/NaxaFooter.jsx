const NaxaFooter = () => {
  return (
    // relative и top-[100px] вместо margin-top
    <div 
      className="relative top-[100px] w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')" }}
    >
      {/* Центрируем блок через absolute и translate, задаем жесткую высоту */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] bg-[rgba(30,40,35,0.5)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.15)] rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        
        {/* Позиционируем заголовок */}
        <h1 className="absolute top-[40px] left-1/2 -translate-x-1/2 text-white text-[32px] w-full text-center flex items-center justify-center before:content-[''] before:h-[2px] before:w-[120px] before:bg-white before:relative before:right-[25px] after:content-[''] after:h-[2px] after:w-[120px] after:bg-white after:relative after:left-[25px]">
          ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ
        </h1>
        
        {/* Позиционируем параграф */}
        <p className="absolute top-[110px] left-1/2 -translate-x-1/2 text-white text-[15px] w-full text-center">
          Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
        </p>
        
        {/* Контейнер для инпутов, инпуты расставлены по процентам (left) */}
        <div className="absolute bottom-[50px] left-0 w-full h-[50px]">
          {/* Вместо padding используем indent-[15px] */}
          <input 
            placeholder="Անուն Ազգանուն" 
            type="text" 
            className="absolute left-[3%] w-[22%] h-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.3)] rounded-[8px] indent-[15px] text-white text-[14px] outline-none transition-all duration-300 placeholder-[rgba(255,255,255,0.6)] focus:border-white focus:bg-[rgba(0,0,0,0.5)]"
          />
          <input 
            placeholder="Հեռախոսահամար" 
            type="text" 
            className="absolute left-[28%] w-[22%] h-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.3)] rounded-[8px] indent-[15px] text-white text-[14px] outline-none transition-all duration-300 placeholder-[rgba(255,255,255,0.6)] focus:border-white focus:bg-[rgba(0,0,0,0.5)]"
          />
          <input 
            placeholder="Էլ հասցե" 
            type="text" 
            className="absolute left-[53%] w-[22%] h-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.3)] rounded-[8px] indent-[15px] text-white text-[14px] outline-none transition-all duration-300 placeholder-[rgba(255,255,255,0.6)] focus:border-white focus:bg-[rgba(0,0,0,0.5)]"
          />
          <button className="absolute right-[3%] w-[22%] h-full bg-[#f7941d] text-white border-none rounded-[25px] text-[16px] font-bold cursor-pointer transition-all duration-300 hover:bg-[#e08316]">
            Ուղարկել
          </button>
        </div>

      </div>
    </div>
  );
};

export default NaxaFooter;