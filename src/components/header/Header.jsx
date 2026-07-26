import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderText from "./HeaderText/HeaderText";

const Header = () => {
  return (
    <header className="w-full h-[70px] lg:h-[90px] bg-white border-b border-[#eaeaea] select-none sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto h-full flex items-center justify-between px-4 xl:px-[20px] gap-4">
        
        {/* 1. Ձախում՝ Լոգոն (մեկ հատ) */}
        <div className="shrink-0 flex items-center">
          <HeaderLogo />
        </div>

        {/* 2. Մեջտեղում՝ Նավիգացիան (Desktop-ում) */}
        <div className="hidden lg:flex items-center justify-center">
          <HeaderText />
        </div>

        {/* 3. Աջում՝ Իքոններն ու Search-ը */}
        <div className="shrink-0 flex items-center">
          <HeaderEnd />
        </div>

      </div>
    </header>
  );
};

export default Header;