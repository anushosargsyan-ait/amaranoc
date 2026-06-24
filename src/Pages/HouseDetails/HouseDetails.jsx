import { useParams } from "react-router-dom";
import HeaderHouseDetalis from "./Component/HeaderHouseDetails";
import ProfileHouseDetails from "./Component/ProfileHouseDetails";
import Add from "./Component/Add";
import Calendar from "./Component/Calendar";
import Advant from "./Component/Advant"; // Изменено здесь
import Descreption from "./Component/Descreption";

const HouseDetails = () => {
  const { id } = useParams();
  const index = parseInt(id);

  return (
    <div className="w-full">
      <HeaderHouseDetalis index={index} />
      <ProfileHouseDetails index={index} />

      <div className="max-w-[1320px] w-[95%] mx-auto mt-10 mb-20 flex flex-col gap-8">
        <div className="flex justify-between items-stretch gap-6">
          <Add />
          <Calendar />
        </div>

     
        <div className="w-full">
          <Descreption />
        </div>
        <div className="w-full">
          <Advant /> 
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
