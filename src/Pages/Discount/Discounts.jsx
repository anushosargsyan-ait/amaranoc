import Cards3Home from "./Components/Cards3Home";
import CardGrid from "./Components/CardsHouse";
import GiftCard from "./Components/GiftCard";
import Offer from "./Components/Offer";
import UniversalDiscount from "./Components/UniversalDiscount";

function Discounts() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col gap-6 sm:gap-10 pb-12">
      <UniversalDiscount />
      <Cards3Home />
      <GiftCard />
      <Offer />
      <CardGrid />
    </div>
  );
}

export default Discounts;