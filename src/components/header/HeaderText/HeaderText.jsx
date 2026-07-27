import HeaderTextP from "./HeaderText3P/HeaderTextP";
import { Link } from "react-router-dom";

const HeaderText = ({ onLinkClick }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 xl:gap-10 w-full">
      <Link to="/" onClick={onLinkClick} className="shrink-0 w-full lg:w-auto">
        <HeaderTextP>Գլխավոր</HeaderTextP>
      </Link>

      <Link to="/discounts" onClick={onLinkClick} className="shrink-0 w-full lg:w-auto">
        <HeaderTextP>Զեղչեր</HeaderTextP>
      </Link>

      <Link to="/services" onClick={onLinkClick} className="shrink-0 w-full lg:w-auto">
        <HeaderTextP>Ծառայություններ</HeaderTextP>
      </Link>

      <Link to="/info" onClick={onLinkClick} className="shrink-0 w-full lg:w-auto">
        <HeaderTextP>Մեր մասին</HeaderTextP>
      </Link>
    </div>
  );
};

export default HeaderText;