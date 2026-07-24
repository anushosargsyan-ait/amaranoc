import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderText from "./HeaderText/HeaderText";

const Header = () => {
  return (
    <header className="w-full h-[70px] lg:h-[90px] bg-white border-b border-[#eaeaea] select-none sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto h-full flex items-center justify-between px-[15px] xl:px-[20px]">
        
        {/* 1. Logo-ն */}
        <div className="flex-shrink-0">
          <HeaderLogo />
        </div>

        {/* 2. Մենյուն (Համակարգչի վրա երևում է, հեռախոսի վրա՝ hidden) */}
        <div className="hidden lg:flex flex-grow justify-center">
          <HeaderText />
        </div>

        {/* 3. Աջ հատվածը (Search, Profile, Language...) */}
        <div className="flex-shrink-0">
          <HeaderEnd />
        </div>

      </div>
    </header>
  );
};

export default Header;