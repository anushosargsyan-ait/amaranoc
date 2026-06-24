import { useParams } from "react-router-dom";
import { qartName, qardPrice } from "../../../components/Main/Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const HeaderHouseDetalis = () => {
  const { id } = useParams();
  const index = parseInt(id);

  return (
    <div className="max-w-[1320px] w-[95%] mx-auto mt-10 px-8 py-5 border border-gray-300 rounded-[40px] flex items-center justify-between shadow-sm bg-white">
      <div className="flex items-center gap-6">
        <h2 className="text-[28px] font-bold flex items-center text-black m-0">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#ff8c00" }}
            className="mr-3"
          />
          {qartName[index]}
        </h2>
        <div className="flex items-center text-[22px] font-bold text-black">
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ff8c00" }}
            className="mr-2"
          />{" "}
          5
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col text-left">
          <p className="font-sans text-[15px] font-medium text-black m-0 mb-1">
            Արժեք
          </p>
          <p className="text-[28px] font-bold text-[#ff8c00] m-0 leading-none">
            {qardPrice[index]}
          </p>
        </div>

        <div className="w-[1px] h-[45px] bg-gray-300"></div>

        <div className="flex flex-col text-left">
          <p className="font-sans text-[15px] font-medium text-black m-0 mb-1">
            Արժեքը գիշերակացով`
          </p>
          <p className="text-[28px] font-bold text-[#ff8c00] m-0 leading-none">
            {qardPrice[index]}
          </p>
        </div>

        <div className="flex items-center gap-3 ml-4">
          <button className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-[#1a1a1a] text-white text-[18px] cursor-pointer border-none shadow-md transition-transform hover:scale-105">
            ֏
          </button>

          <button className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white border border-gray-300 text-black text-[18px] cursor-pointer transition-colors hover:border-gray-500 hover:bg-gray-50">
            $
          </button>
          <button className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white border border-gray-300 text-black text-[18px] cursor-pointer transition-colors hover:border-gray-500 hover:bg-gray-50">
            €
          </button>
          <button className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white border border-gray-300 text-black text-[18px] cursor-pointer transition-colors hover:border-gray-500 hover:bg-gray-50">
            ₽
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHouseDetalis;
