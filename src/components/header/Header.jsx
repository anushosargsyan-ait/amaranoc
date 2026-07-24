import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderText from "./HeaderText/HeaderText";

const Header = () => {
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
          <HeaderEnd />
        </div>
      </div>
    </header>
  );
};

export default Header;