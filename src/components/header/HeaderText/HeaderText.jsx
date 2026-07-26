import HeaderTextP from "./HeaderText3P/HeaderTextP";
import { Link } from "react-router-dom";

const HeaderText = () => {
  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <Link to="/" className="shrink-0">
        <HeaderTextP>Գլխավոր</HeaderTextP>
      </Link>

      <Link to="/discounts" className="shrink-0">
        <HeaderTextP>Զեղչեր</HeaderTextP>
      </Link>

      <Link to="/services" className="shrink-0">
        <HeaderTextP>Ծառայություններ</HeaderTextP>
      </Link>

      <Link to="/info" className="shrink-0">
        <HeaderTextP>Մեր մասին</HeaderTextP>
      </Link>
    </div>
  );
};

export default HeaderText;