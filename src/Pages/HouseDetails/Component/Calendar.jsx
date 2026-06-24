import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const prevDays = [27, 28, 29, 30];
  const currentDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-[48%] border border-gray-200 rounded-[20px] p-8 bg-white shadow-sm flex flex-col">
      <h2 className="text-[20px] font-bold text-black mb-8">
        Նշեք Ձեր ցանկալի օրերը
      </h2>

      <div className="border border-gray-200 rounded-[10px] overflow-hidden flex-1">
        <div className="bg-[#f08c28] text-white flex justify-between items-center px-6 py-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer text-[15px]"
          />
          <span className="font-bold uppercase text-[17px] tracking-wide">
            Մայիս
          </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="cursor-pointer text-[15px]"
          />
        </div>

        <div className="grid grid-cols-7 text-center py-4 border-b border-gray-200 text-[15px] font-medium text-[#333]">
          <span>Երկ</span>
          <span>Երք</span>
          <span>Չոր</span>
          <span>Հնգ</span>
          <span>Ուրբ</span>
          <span className="text-[#f08c28]">Շաբ</span>
          <span className="text-[#f08c28]">Կիր</span>
        </div>

        <div className="grid grid-cols-7 text-center py-6 gap-y-7 text-[15px]">
          {prevDays.map((day, index) => (
            <span key={`prev-${index}`} className="text-gray-200">
              {day}
            </span>
          ))}

          {currentDays.map((day) => (
            <span
              key={day}
              className="text-gray-400 font-medium cursor-pointer hover:text-[#f08c28] hover:font-bold transition-all"
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
