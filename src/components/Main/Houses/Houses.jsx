import { faAddressCard, faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { qardImg, qartName, qardPeople, qardPrice } from "../Code";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { useFilterStore } from "../../store/useFilterStore";

const House = () => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const { selectedRegions, priceRange, guestsCount } = useFilterStore();

  return (
    /* 🔴 1. Փոխվել է Container-ի flex-ը: Mobile-ում 1 սյունակ (100%), Tablet-ում 2, Desktop-ում 3: */
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full mt-6">
      {qardImg.map((imgUrl, index) => {
        const isFav = favorites.includes(index);
        const name = (qartName[index] || "").trim();

        const peopleRaw = (qardPeople[index] || "").toString().trim();
        const people = Number(peopleRaw);

        const priceRaw = (qardPrice[index] || "").toString().replace(/\./g, "").trim();
        const price = Number(priceRaw);

        // --- 1. ՏԱՐԱԾԱՇՐՋԱՆԻ ՖԻԼՏՐ ---
        if (selectedRegions.length > 0) {
          const matchesRegion = selectedRegions.some((reg) => {
            const cleanRegionName = reg.replace(/\s*\([\d\s]+\)/g, "").replace(/[0-9]/g, "").trim().toLowerCase();
            return name.toLowerCase().includes(cleanRegionName);
          });

          if (!matchesRegion) return null;
        }

        // --- 2. ՄԱՐԴԿԱՆՑ ՔԱՆԱՔԻ ՖԻԼՏՐ ---
        if (guestsCount > 1 && people < guestsCount) {
          return null;
        }

        // --- 3. ԳՆԻ ՖԻԼՏՐ ---
        if (priceRange.min !== "" && price < Number(priceRange.min)) {
          return null;
        }
        if (priceRange.max !== "" && price > Number(priceRange.max)) {
          return null;
        }

        return (
          <Link
            to={`/house/${index}`}
            key={index}
            /* 🔴 2. w-[calc(...)]-ը հեռացվել է, քանի որ grid-ն ինքը ճիշտ չափս է տալիս */
            className="w-full flex flex-col rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white transition-transform duration-200 hover:scale-[1.02] relative"
          >
            {/* Սրտիկի Կոճակ */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(index);
              }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors cursor-pointer"
            >
              <FontAwesomeIcon
                icon={isFav ? fasHeart : farHeart}
                className={`text-[16px] sm:text-[18px] transition-colors ${
                  isFav ? "text-red-500" : "text-gray-500 hover:text-red-500"
                }`}
              />
            </button>

            {/* 🔴 3. Նկարի բարձրությունը mobile-ում 180px-200px է, մեծ էկրանում՝ 240px */}
            <img
              src={imgUrl}
              alt={name}
              className="w-full h-[190px] sm:h-[220px] md:h-[240px] object-cover"
            />

            <div className="p-4 sm:p-5 flex flex-col gap-3 sm:gap-4">
              <div className="flex justify-between items-center">
                <h3 className="flex items-center m-0 font-sans text-[16px] sm:text-[20px] text-[#222]">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "orange", marginRight: "8px" }}
                  />
                  {name}
                </h3>

                <p className="text-[13px] sm:text-[15px] font-sans text-[#666] m-0">
                  <FontAwesomeIcon
                    icon={faAccessibleIcon}
                    style={{ color: "orange", marginLeft: "10px", marginRight: "4px" }}
                  />
                  {qardPeople[index]} անձ
                </p>
              </div>

              <p className="font-sans text-[16px] sm:text-[18px] font-bold text-black m-0">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ color: "orange", marginRight: "10px" }}
                />
                {qardPrice[index]} ֏
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default House;