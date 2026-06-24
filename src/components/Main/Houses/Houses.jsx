import Arajark from "./Arajark";
import House from "./House";
import Page from "./Page";

const Houses = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Arajark className="flex" />
      <House />
      <Page />
    </div>
  );
};

export default Houses;
