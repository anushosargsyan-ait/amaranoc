import Region from "./Region/Region";
import Price from "./Region/Price";
import People from "./Region/People";
import NightPresence from "./Region/NightPresence";
import PeopleNight from "./Region/PeopleNight";
import Rooms from "./Region/Rooms";
import Bathroom from "./Region/Bathroom";
import Pool from "./Region/Pool";
import Advantages from "./Region/Advantages";

const Aside = () => {
  return (
    <aside className="w-80 bg-white border border-[#eaeaea] rounded-[20px] font-sans shadow-sm p-5 flex flex-col gap-6">
      <Region />
      <Price plc1="Սկսած" plc2="Մինչև" />
      <People />
      <NightPresence />
      <PeopleNight />
      <Rooms />
      <Bathroom />
      <Pool />
      <Advantages />
    </aside>
  );
};

export default Aside;
