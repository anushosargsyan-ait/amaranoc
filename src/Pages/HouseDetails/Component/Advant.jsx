import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faUmbrellaBeach,
  faWifi,
  faTv,
  faWind,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Advant = () => {
  const advantagesList = [
    { id: 1, icon: faBath, label: "Ջակուզի" },
    { id: 2, icon: faUmbrellaBeach, label: "Բացօթյա տաղավար" },
    { id: 3, icon: faWifi, label: "WiFi" },
    { id: 4, icon: faTv, label: "Smart հեռուստացույց" },
    { id: 5, icon: faWind, label: "Օդորակիչ" },
    { id: 6, icon: faUtensils, label: "Սպասք" },
  ];

  return (
    <div className="border border-gray-200 rounded-[20px] p-8 bg-white shadow-sm w-full">
      <h2 className="text-[20px] font-bold text-black mb-8">
        Առավելություններ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {advantagesList.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="w-[35px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-[26px]"
                style={{ color: "#f08c28" }}
              />
            </div>
            <span className="text-[15px] font-medium text-[#333]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advant;
