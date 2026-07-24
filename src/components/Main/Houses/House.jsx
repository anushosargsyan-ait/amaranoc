import { faAddressCard, faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { qardImg, qartName, qardPeople, qardPrice } from "../Code";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { useFilterStore } from "../../store/useFilterStore"; // 1. Import ենք անում Filter Store-ը

const House = () => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  
  // 2. Վերցնում ենք ֆիլտրերի state-երը
  const { selectedRegions, priceRange, guestsCount } = useFilterStore();

  return (
    <div className="flex flex-wrap gap-5 w-full mt-6">
      {qardImg.map((imgUrl, index) => {
        const isFav = favorites.includes(index);

        // Տվյալ քարտի տվյալները
        const name = qartName[index];
        const people = Number(qardPeople[index]);
        const price = Number(qardPrice[index]);

        // --- ՖԻԼՏՐՄԱՆ ԼՈԳԻԿԱ ---
        // 1. Տարածաշրջանի ստուգում (եթե ընտրված է տարածաշրջան ու այս քարտի անունը չի պարունակում դա)
        if (
          selectedRegions.length > 0 &&
          !selectedRegions.some((reg) => name?.toLowerCase().includes(reg.toLowerCase()))
        ) {
          return null;
        }

        // 2. Մարդկանց քանակի ստուգում
        if (people && people < guestsCount) {
          return null;
        }

        // 3. Գնի ստուգում (min / max)
        if (priceRange.min !== "" && price < Number(priceRange.min)) {
          return null;
        }
        if (priceRange.max !== "" && price > Number(priceRange.max)) {
          return null;
        }
        // -------------------------

        return (
          <Link
            to={`/house/${index}`}
            key={index}
            className="w-[calc((100%-40px)/3)] flex flex-col rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white transition-transform duration-200 hover:scale-[1.02] relative"
          >
            {/* Սրտիկի Կոճակ */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault(); // Կանխում է էջի անցումը Link-ով
                toggleFavorite(index);
              }}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors cursor-pointer"
            >
              <FontAwesomeIcon
                icon={isFav ? fasHeart : farHeart}
                className={`text-[18px] transition-colors ${
                  isFav ? "text-red-500" : "text-gray-500 hover:text-red-500"
                }`}
              />
            </button>

            <img
              src={imgUrl}
              alt={name}
              className="w-full h-[240px] object-cover"
            />

            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="flex items-center m-0 font-sans text-[20px] text-[#222]">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "orange", marginRight: "8px" }}
                  />
                  {name}
                </h3>

                <p className="text-[15px] font-sans text-[#666] m-0">
                  <FontAwesomeIcon
                    icon={faAccessibleIcon}
                    style={{ color: "orange", marginLeft: "10px" }}
                  />
                  {people} անձ
                </p>
              </div>

              <p className="font-sans text-[18px] font-bold text-black m-0">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ color: "orange", marginRight: "10px" }}
                />
                {price} ֏
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default House;