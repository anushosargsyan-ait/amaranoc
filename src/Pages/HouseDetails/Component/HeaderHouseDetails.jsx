import { useParams } from "react-router-dom";
import { qartName, qardPrice } from "../../../components/Main/Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const HeaderHouseDetalis = () => {
  const { id } = useParams();
  const index = parseInt(id);

  return (
    /* 🔴 1. px-4 sm:px-8, rounded-[20px] sm:rounded-[40px] և flex-col lg:flex-row (mobile-ում իրար տակ, desktop-ում կողք-կողքի) */
    <div className="max-w-[1320px] w-[95%] mx-auto mt-4 sm:mt-10 px-4 sm:px-8 py-4 sm:py-5 border border-gray-300 rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 shadow-sm bg-white">
      
      {/* Տեղանունն ու աստղը */}
      <div className="flex items-center justify-between w-full lg:w-auto gap-4">
        <h2 className="text-[20px] sm:text-[28px] font-bold flex items-center text-black m-0 truncate">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#ff8c00" }}
            className="mr-2 sm:mr-3 shrink-0"
          />
          {qartName[index]}
        </h2>
        <div className="flex items-center text-[18px] sm:text-[22px] font-bold text-black shrink-0">
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ff8c00" }}
            className="mr-1.5 sm:mr-2"
          />{" "}
          5
        </div>
      </div>

      {/* Գները և արժույթները */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-4 w-full lg:w-auto border-t lg:border-t-0 pt-3 lg:pt-0 border-gray-100">
        
        {/* Ցերեկային արժեք */}
        <div className="flex flex-col text-left">
          <p className="font-sans text-[12px] sm:text-[15px] font-medium text-gray-600 sm:text-black m-0 mb-1">
            Արժեք
          </p>
          <p className="text-[20px] sm:text-[28px] font-bold text-[#ff8c00] m-0 leading-none">
            {qardPrice[index]}
          </p>
        </div>

        <div className="hidden sm:block w-[1px] h-[45px] bg-gray-300"></div>

        {/* Գիշերակացով արժեք */}
        <div className="flex flex-col text-left">
          <p className="font-sans text-[12px] sm:text-[15px] font-medium text-gray-600 sm:text-black m-0 mb-1">
            Արժեքը գիշերակացով`
          </p>
          <p className="text-[20px] sm:text-[28px] font-bold text-[#ff8c00] m-0 leading-none">
            {qardPrice[index]}
          </p>
        </div>

        {/* Արժույթի կոճակները (֏, $, €, ₽) */}
        <div className="flex items-center gap-1.5 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start mt-2 sm:mt-0">
          <button className="w-[36px] h-[36px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-[#1a1a1a] text-white text-[15px] sm:text-[18px] cursor-pointer border-none shadow-md transition-transform hover:scale-105">
            ֏
          </button>
          <button className="w-[36px] h-[36px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-white border border-gray-300 text-black text-[15px] sm:text-[18px] cursor-pointer transition-colors hover:border-gray-500 hover:bg-gray-50">
            $
          </button>
          <button className="w-[36px] h-[36px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-white border border-gray-300 text-black text-[15px] sm:text-[18px] cursor-pointer transition-colors hover:border-gray-500 hover:bg-gray-50">
            €
          </button>
          <button className="w-[36px] h-[36px] sm:w-[45px] sm:h-[45px] flex justify-center items-center rounded-full bg-white border border-gray-300 text-black text-[15px] sm:text-[18px] cursor-pointer transition-colors hover:border-gray-500 hover:bg-gray-50">
            ₽
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeaderHouseDetalis;