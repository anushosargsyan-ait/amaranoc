import { useParams } from "react-router-dom";
import HeaderHouseDetalis from "./Component/HeaderHouseDetails";
import ProfileHouseDetails from "./Component/ProfileHouseDetails";
import Add from "./Component/Add";
import Calendar from "./Component/Calendar";
import Advant from "./Component/Advant";
import Descreption from "./Component/Descreption";

const HouseDetails = () => {
  const { id } = useParams();
  const index = parseInt(id, 10);

  return (
    <div className="w-full overflow-x-hidden">
      <HeaderHouseDetalis index={index} />
      <ProfileHouseDetails index={index} />

      <div className="max-w-[1320px] w-[95%] mx-auto mt-6 sm:mt-10 mb-10 sm:mb-20 flex flex-col gap-6 sm:gap-8">
        
        {/* 🔴 ԼՈՒԾՈՒՄԸ. Mobile-ում flex-col (իրար տակ), Laptop/Desktop-ում flex-row (իրար կողք) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-6 w-full">
          {/* Ձախ կողմը՝ Հայտարարության մասին / Add */}
          <div className="w-full lg:w-[60%] xl:w-[65%]">
            <Add />
          </div>

          {/* Աջ կողմը՝ Օրացույց / Calendar */}
          <div className="w-full lg:w-[40%] xl:w-[35%]">
            <Calendar />
          </div>
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