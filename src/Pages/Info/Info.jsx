import AboutUs from "./Components/AboutUs";
import Choose from "./Components/Choose";
import FooterImg from "./Components/FooterImg";
import History from "./Components/History";
import ImgHeader from "./Components/ImgHeader";
import Marqeting from "./Components/Marqeting";
import OurImg from "./Components/OurImg";
import OurTeam from "./Components/OurTeam";

const Info = () => {
  return (
    <>
      <ImgHeader />
      <AboutUs />
      <OurTeam />
      <OurImg />
      <Choose />
      <Marqeting></Marqeting>
      <History></History>
      <FooterImg></FooterImg>
    </>
  );
};

export default Info;
