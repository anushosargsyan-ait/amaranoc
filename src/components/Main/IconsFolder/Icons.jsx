import { iconsImg, iconsText } from "../Code";

// 1. Ընդունում ենք onMapOpen prop-ը
const Icons = ({ onMapOpen }) => {
  return (
    <div className=" mx-5 w-full border-t border-b border-[#e5e5e5] my-6 py-4 flex items-center justify-between gap-4">
      
      {/* 2. ՔԱՐՏԵԶԻ / LEFT ԿՈՃԱԿԸ (Ավելացված է onClick={onMapOpen}) */}
      <button 
        onClick={onMapOpen}
        className="cursor-pointer rounded-full h-10 w-10 border border-black flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shrink-0"
        title="Բացել քարտեզը"
      >
        <img
          src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/ui-actions/arrow-left-alt-gjov0rrfaidmwfiboacch.png/arrow-left-alt-5ufw09e1z3jbk920li7a28.png?_a=DATAiZAAZAA0"
          alt="left"
          className="w-5 h-5"
        />
      </button>

      <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2 w-full justify-start md:justify-center">
        {iconsImg.map((img, index) => (
          <div
            key={index}
            /* 3. Եթե ուզում ես, որ հենց «Քարտեզ» իկոնայի/տեքստի վրա սեղմելիս էլ բացվի */
            onClick={iconsText[index] === "Քարտեզ" ? onMapOpen : undefined}
            className="flex flex-col items-center w-[110px] shrink-0 cursor-pointer group"
          >
            <img
              src={img}
              alt={iconsText[index]}
              className="w-10 h-10 mb-2 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-sans text-[13px] text-center text-[#222] whitespace-nowrap leading-tight">
              {iconsText[index]}
            </span>
          </div>
        ))}
      </div>

      <button className="cursor-pointer rounded-full h-10 w-10 border border-black flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shrink-0">
        <img
          src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-right-arrow-png-image_4421150.jpg"
          alt="right"
          className="w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Icons;