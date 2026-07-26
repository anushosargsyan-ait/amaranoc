import { qardImg } from "../../../components/Main/Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProfileHouseDetails = ({ index }) => {
  const mainImg = qardImg[index];

  const img2 = qardImg[(index + 1) % qardImg.length] || mainImg;
  const img3 = qardImg[(index + 2) % qardImg.length] || mainImg;
  const img4 = qardImg[(index + 3) % qardImg.length] || mainImg;
  const img5 = qardImg[(index + 4) % qardImg.length] || mainImg;

  return (
    /* 
      🔴 ԼՈՒԾՈՒՄ․
      1. h-auto mobile-ում, h-[550px] md-ից սկսած
      2. flex-col mobile-ում, flex-row md-ից սկսած
    */
    <div className="max-w-[1320px] w-[95%] mx-auto mt-4 sm:mt-6 flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[550px]">
      
      {/* Գլխավոր (մեծ) նկարը */}
      <div className="w-full md:w-[60%] h-[260px] sm:h-[380px] md:h-full relative rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-sm group shrink-0">
        <img
          src={mainImg}
          alt="Main House"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <button className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 bg-white/80 backdrop-blur-sm flex justify-center items-center rounded-full cursor-pointer border-none shadow-md transition-colors hover:bg-white z-10">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-gray-700 text-[16px] sm:text-[20px]"
          />
        </button>
      </div>

      {/* 4 փոքր նկարները */}
      <div className="w-full md:w-[40%] grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-[220px] sm:h-[320px] md:h-full">
        <div className="rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-sm">
          <img
            src={img2}
            alt="Gallery 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-sm">
          <img
            src={img3}
            alt="Gallery 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-sm">
          <img
            src={img4}
            alt="Gallery 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="rounded-[12px] sm:rounded-[20px] overflow-hidden relative shadow-sm">
          <img
            src={img5}
            alt="Gallery 5"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {/* «Տեսնել բոլորը» կոճակը */}
          <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white/90 backdrop-blur-sm px-3 py-1 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-[14px] font-sans font-medium text-black border border-gray-200 shadow-md cursor-pointer transition-colors hover:bg-white z-10">
            Տեսնել բոլորը
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHouseDetails;