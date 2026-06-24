import Cards3Home from "./Components/Cards3Home";
import CardGrid from "./Components/CardsHouse";
import GiftCard from "./Components/GiftCard";
import Offer from "./Components/Offer";
import UniversalDiscount from "./Components/UniversalDiscount";

function Discounts() {
  return (
    <div className="">
      <UniversalDiscount></UniversalDiscount>
      <Cards3Home></Cards3Home>
      <GiftCard></GiftCard>
      <Offer></Offer>
      <CardGrid></CardGrid>
    </div>
  );
}

export default Discounts;
