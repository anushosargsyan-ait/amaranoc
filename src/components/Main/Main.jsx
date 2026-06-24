import MapsData from "./Maps/MapsData";
import Icons from "./IconsFolder/Icons";
import Houses from "./Houses/Houses";

const Main = () => {
  return (
    <div className=" flex flex-col w-full p-5 mt-5 gap-6">
      <MapsData />
      <Icons />
      <Houses />
    </div>
  );
};

export default Main;
