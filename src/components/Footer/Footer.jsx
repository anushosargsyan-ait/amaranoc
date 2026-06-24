import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full h-[450px] bg-[#0c121e] text-white font-sans overflow-hidden">
      <h2 className="absolute top-[70px] left-1/2 -translate-x-1/2 text-[34px] font-bold tracking-[1px] whitespace-nowrap">
        ԿՈՆՏԱԿՏՆԵՐ
      </h2>

      <div className="absolute top-[160px] left-[5%] w-[90%] h-[30px] flex justify-between items-center">
        <div className="relative flex items-center h-full text-[14px] font-medium uppercase w-[18%]">
          <FiPhone className="absolute left-0 text-[18px] text-white" />
          <span className="absolute left-[25px] whitespace-nowrap">
            041-611-611 / 044-611
          </span>
        </div>
        <div className="relative flex items-center h-full text-[14px] font-medium uppercase w-[18%]">
          <FiMail className="absolute left-0 text-[18px] text-white" />
          <span className="absolute left-[25px] whitespace-nowrap">
            AMARANOC@GMAIL.COM
          </span>
        </div>
        <div className="relative flex items-center h-full text-[14px] font-medium uppercase w-[18%]">
          <FiInstagram className="absolute left-0 text-[18px] text-white" />
          <span className="absolute left-[25px] whitespace-nowrap">
            AMARANOC.AM
          </span>
        </div>
        <div className="relative flex items-center h-full text-[14px] font-medium uppercase w-[18%]">
          <FiFacebook className="absolute left-0 text-[18px] text-white" />
          <span className="absolute left-[25px] whitespace-nowrap">
            AMARANOC.AM
          </span>
        </div>
        <div className="relative flex items-center h-full text-[14px] font-medium uppercase w-[18%]">
          <FiMapPin className="absolute left-0 text-[18px] text-white" />
          <span className="absolute left-[25px] whitespace-nowrap">
            ԹՈՒՄԱՆՅԱՆ 5
          </span>
        </div>
      </div>

      <a
        href="#"
        className="absolute top-[250px] left-1/2 -translate-x-1/2 text-white underline text-[14px] transition-colors duration-300 hover:text-[#f7941d] whitespace-nowrap"
      >
        Գաղտնիության քաղաքականություն
      </a>

      <p className="absolute top-[295px] left-1/2 -translate-x-1/2 text-[13px] text-[#d1d5db] whitespace-nowrap">
        Ամարանոց ՍՊԸ | Amaranoc LLC | Амараноц ООО
      </p>

      <div
        className="absolute bottom-0 left-0 w-full h-[200px] bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75')",
        }}
      ></div>

      <div className="fixed right-0 top-[60%] -translate-y-1/2 w-[50px] h-[110px] bg-[#fca34d] rounded-l-[12px] z-[100] shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
        <a
          href="tel:041611611"
          className="absolute top-[20px] left-1/2 -translate-x-1/2 text-white text-[22px] transition-transform duration-200 hover:scale-[1.15]"
        >
          <FiPhone />
        </a>
        <a
          href="mailto:AMARANOC.INFO@GMAIL.COM"
          className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-white text-[22px] transition-transform duration-200 hover:scale-[1.15]"
        >
          <FiMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
