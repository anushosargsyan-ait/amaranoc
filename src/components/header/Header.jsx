import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderText from "./HeaderText/HeaderText";

// 1. Ընդունում ենք onMapOpen prop-ը App.jsx-ից
const Header = ({ onMapOpen }) => {
  return (
    <header className="w-full h-[90px] bg-white border-b border-[#eaeaea] select-none">
      <div className="max-w-[1320px] mx-auto h-full flex items-center justify-between px-[15px] xl:px-[20px]">
        
        <div className="flex-shrink-0">
          <HeaderLogo />
        </div>

        <div className="flex-grow flex justify-center">
          <HeaderText />
        </div>

        <div className="flex-shrink-0">
          {/* 2. Փոխանցում ենք onMapOpen-ը HeaderEnd-ին */}
          <HeaderEnd onMapOpen={onMapOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;