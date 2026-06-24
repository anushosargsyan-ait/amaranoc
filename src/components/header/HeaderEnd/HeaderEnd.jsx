import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useFavoriteStore } from "../../store/useFavoriteStore";
// Ներմուծում ենք տվյալները (համոզվիր, որ ճանապարհը ճիշտ է)
import { qardImg, qartName, qardPrice } from "../../Main/Code"; 

const HeaderEnd = () => {
  // Վերցնում ենք և՛ ցանկը, և՛ հեռացնելու ֆունկցիան
  const { favorites, toggleFavorite } = useFavoriteStore();
  
  // State, որը որոշում է՝ բացել սրտիկների ցանկը, թե ոչ
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 relative">
      
      {/* Սրտիկի Կոճակ */}
      <div 
        className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)} // Սեղմելիս բացում/փակում է
      >
        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-[22px]" />
        
        {favorites.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
            {favorites.length}
          </span>
        )}
      </div>

      {/* Բացվող Պատուհան (Dropdown) */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-[320px] max-h-[400px] overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl p-4 z-50">
          
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-[18px] font-bold text-gray-800 m-0">Սիրված տներ</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Ստուգում ենք՝ արդյոք ցանկը դատարկ է */}
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center text-[14px] my-4">Դուք դեռ չունեք հավանած տներ</p>
          ) : (
            <div className="flex flex-col gap-3">
              {/* Պտտվում ենք մեր ընտրած տների index-ների վրայով */}
              {favorites.map((index) => (
                <div key={index} className="flex items-center gap-3 border-b pb-3 last:border-b-0 border-gray-100">
                  <img 
                    src={qardImg[index]} 
                    alt={qartName[index]} 
                    className="w-16 h-16 object-cover rounded-lg shadow-sm" 
                  />
                  
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-[15px] text-gray-800 m-0">{qartName[index]}</h4>
                    <p className="text-[13px] font-bold text-orange-500 m-0">{qardPrice[index]} ֏</p>
                  </div>

                  {/* Ջնջելու կոճակ հենց ցանկի միջից */}
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="ml-auto text-gray-300 hover:text-red-500 transition-colors p-2"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default HeaderEnd;