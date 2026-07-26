import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center shrink-0 no-underline">
      {/* Mobile-ում w-[110px], sm-ում w-[140px], lg-ում w-[160px] */}
      <img
        src="https://amaranoc.am/images/logo.svg"
        alt="Amaranoc Logo"
        className="w-[110px] sm:w-[140px] lg:w-[160px] h-auto object-contain transition-transform hover:scale-105"
      />
    </Link>
  );
};

export default HeaderLogo;