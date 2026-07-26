import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0c121e] text-white font-sans overflow-hidden pt-12 pb-16 px-4 sm:px-8">
      
      {/* Վերնագիր */}
      <h2 className="text-center text-[24px] sm:text-[28px] lg:text-[34px] font-bold tracking-[1px] mb-8 sm:mb-12">
        ԿՈՆՏԱԿՏՆԵՐ
      </h2>

      {/* Կոնտակտների ցանց (Mobile-ում 1 սյուն, Tablet-ում 2-3, Desktop-ում 5 սյուն) */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 items-center mb-10 text-sm font-medium uppercase">
        
        <a href="tel:041611611" className="flex items-center gap-3 hover:text-[#f7941d] transition-colors">
          <FiPhone className="text-[20px] text-[#f7941d] flex-shrink-0" />
          <span className="tracking-wide">041-611-611 / 044-611</span>
        </a>

        <a href="mailto:AMARANOC@GMAIL.COM" className="flex items-center gap-3 hover:text-[#f7941d] transition-colors">
          <FiMail className="text-[20px] text-[#f7941d] flex-shrink-0" />
          <span className="tracking-wide">AMARANOC@GMAIL.COM</span>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#f7941d] transition-colors">
          <FiInstagram className="text-[20px] text-[#f7941d] flex-shrink-0" />
          <span className="tracking-wide">AMARANOC.AM</span>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#f7941d] transition-colors">
          <FiFacebook className="text-[20px] text-[#f7941d] flex-shrink-0" />
          <span className="tracking-wide">AMARANOC.AM</span>
        </a>

        <div className="flex items-center gap-3">
          <FiMapPin className="text-[20px] text-[#f7941d] flex-shrink-0" />
          <span className="tracking-wide">ԹՈՒՄԱՆՅԱՆ 5</span>
        </div>

      </div>

      {/* Գաղտնիության քաղաքականություն և ՍՊԸ */}
      <div className="flex flex-col items-center gap-2 text-center mb-8">
        <a
          href="#"
          className="text-white underline text-[14px] transition-colors duration-300 hover:text-[#f7941d]"
        >
          Գաղտնիության քաղաքականություն
        </a>

        <p className="text-[13px] text-[#d1d5db]">
          Ամարանոց ՍՊԸ | Amaranoc LLC | Амараноц ООО
        </p>
      </div>

      {/* Ներքևի նկարով ֆոնային բլոկ */}
      <div
        className="w-full h-[120px] sm:h-[180px] bg-cover bg-bottom bg-no-repeat opacity-80 mt-4"
        style={{
          backgroundImage:
            "url('https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75')",
        }}
      ></div>

      {/* Աջ կողմի ֆիքսված կոճակներ (Responsive տեղադրությամբ) */}
      <div className="fixed right-0 top-[60%] -translate-y-1/2 w-[45px] sm:w-[50px] h-[100px] sm:h-[110px] bg-[#fca34d] rounded-l-[12px] z-[100] shadow-[-4px_4px_15px_rgba(0,0,0,0.2)] flex flex-col justify-around items-center py-3">
        <a
          href="tel:041611611"
          className="text-white text-[20px] sm:text-[22px] transition-transform duration-200 hover:scale-[1.15]"
        >
          <FiPhone />
        </a>
        <a
          href="mailto:AMARANOC.INFO@GMAIL.COM"
          className="text-white text-[20px] sm:text-[22px] transition-transform duration-200 hover:scale-[1.15]"
        >
          <FiMail />
        </a>
      </div>

    </footer>
  );
};

export default Footer;