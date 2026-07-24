import MapsData from "./Maps/MapsData";
import Icons from "./IconsFolder/Icons";
import Houses from "./Houses/Houses";

// 1. Ընդունում ենք onMapOpen prop-ը App.jsx-ից
const Main = ({ onMapOpen }) => {
  return (
    <div className=" flex flex-col w-full p-5 mt-5 gap-6">
      {/* 2. Փոխանցում ենք MapsData-ին և Icons-ին */}
      <MapsData onMapOpen={onMapOpen} />
      <Icons onMapOpen={onMapOpen} />
      <Houses />
    </div>
  );
};

export default Main;