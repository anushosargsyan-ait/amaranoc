import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const prevDays = [27, 28, 29, 30];
  const currentDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    /* 🔴 1. w-[48%]-ի փոխարեն w-full, որպեսզի mobile-ում 100% լինի */
    <div className="w-full border border-gray-200 rounded-[20px] p-4 sm:p-8 bg-white shadow-sm flex flex-col">
      <h2 className="text-[18px] sm:text-[20px] font-bold text-black mb-6 sm:mb-8 text-center sm:text-left">
        Նշեք Ձեր ցանկալի օրերը
      </h2>

      <div className="border border-gray-200 rounded-[10px] overflow-hidden flex-1 w-full">
        {/* Հեդերը (Ամսվա անունն ու սլաքները) */}
        <div className="bg-[#f08c28] text-white flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer text-[14px] sm:text-[15px] p-1"
          />
          <span className="font-bold uppercase text-[15px] sm:text-[17px] tracking-wide">
            Մայիս
          </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="cursor-pointer text-[14px] sm:text-[15px] p-1"
          />
        </div>

        {/* Շաբաթվա օրերի անունները */}
        <div className="grid grid-cols-7 text-center py-3 sm:py-4 border-b border-gray-200 text-[12px] sm:text-[15px] font-medium text-[#333]">
          <span>Երկ</span>
          <span>Երք</span>
          <span>Չոր</span>
          <span>Հնգ</span>
          <span>Ուրբ</span>
          <span className="text-[#f08c28]">Շաբ</span>
          <span className="text-[#f08c28]">Կիր</span>
        </div>

        {/* 🔴 2. gap-y-7-ի փոխարեն դրվեց responsive gap-y-3 sm:gap-y-6, իսկ py-6 -> py-4 sm:py-6 */}
        <div className="grid grid-cols-7 text-center py-4 sm:py-6 gap-y-3 sm:gap-y-6 text-[13px] sm:text-[15px]">
          {prevDays.map((day, index) => (
            <span key={`prev-${index}`} className="text-gray-200 select-none">
              {day}
            </span>
          ))}

          {currentDays.map((day) => (
            <span
              key={day}
              className="text-gray-400 font-medium cursor-pointer hover:text-[#f08c28] hover:font-bold transition-all py-1"
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