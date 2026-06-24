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
    // Изменили ширину и высоту: max-w-[1320px] w-[95%] h-[550px]
    <div className="max-w-[1320px] w-[95%] mx-auto mt-6 flex gap-4 h-[550px]">
      <div className="w-[60%] relative rounded-[20px] overflow-hidden shadow-sm group">
        <img
          src={mainImg}
          alt="Main House"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <button className="absolute bottom-4 right-4 w-11 h-11 bg-white/80 backdrop-blur-sm flex justify-center items-center rounded-full cursor-pointer border-none shadow-md transition-colors hover:bg-white z-10">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-gray-700 text-[20px]"
          />
        </button>
      </div>

      <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-4">
        <div className="rounded-[20px] overflow-hidden shadow-sm">
          <img
            src={img2}
            alt="Gallery 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="rounded-[20px] overflow-hidden shadow-sm">
          <img
            src={img3}
            alt="Gallery 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="rounded-[20px] overflow-hidden shadow-sm">
          <img
            src={img4}
            alt="Gallery 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="rounded-[20px] overflow-hidden relative shadow-sm">
          <img
            src={img5}
            alt="Gallery 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {/* Кнопка "Показать все" */}
          <button className="absolute bottom-3 right-3 bg-white px-5 py-2 rounded-full text-[14px] font-sans font-medium text-black border border-gray-200 shadow-md cursor-pointer transition-colors hover:bg-gray-100 z-10">
            Տեսնել բոլորը
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHouseDetails;
