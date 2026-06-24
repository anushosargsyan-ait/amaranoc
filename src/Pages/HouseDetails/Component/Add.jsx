import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHashtag,
  faLocationDot,
  faBed,
  faHouse,
  faExpand,
  faUsers,
  faUserGroup,
  faDoorOpen,
  faBath,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";

const Add = () => {
  const details = [
    { id: 1, icon: faHashtag, label: "Կոդ", value: "AT184" },
    { id: 2, icon: faLocationDot, label: "Հասցե", value: "Ծաղկաձոր" },
    { id: 3, icon: faBed, label: "Գիշերակաց", value: "Այո" },
    { id: 4, icon: faHouse, label: "Շինության մակերես", value: "40 քմ" },
    { id: 5, icon: faExpand, label: "Ընդհանուր մակերես", value: "100 քմ" },
    { id: 6, icon: faUsers, label: "Մարդկանց թույլատրելի քանակ", value: "3" },
    {
      id: 7,
      icon: faUserGroup,
      label: "Մարդկանց թույլատրելի քանակը գիշերակացով",
      value: "3",
    },
    { id: 8, icon: faDoorOpen, label: "Սենյակների քանակ", value: "1" },
    { id: 9, icon: faBath, label: "Սանհանգույցների քանակ", value: "1" },
    {
      id: 10,
      icon: faWaterLadder,
      label: "Լողավազան",
      value: "Առանց լողավազանի",
    },
  ];

  return (
    <div className="w-[48%] border border-gray-200 rounded-[20px] p-8 bg-white shadow-sm flex flex-col">
      <h2 className="text-[20px] font-bold text-black mb-8">
        Հայտարարության մասին
      </h2>

      <div className="flex flex-col gap-5">
        {details.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-[15px] font-sans"
          >
            <div className="flex items-center gap-4 text-[#333]">
              <div className="w-[20px] flex justify-center">
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: "#f08c28" }}
                  className="text-[17px]"
                />
              </div>
              <span className="font-medium text-gray-800">{item.label}</span>
            </div>
            <span className="font-semibold text-black">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
