import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import cardData from "./cardData";
import Card from "./Card";
import "./css/airbnb.css";

function AirbnbApp() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex items-center justify-between overflow-y-auto overflow-x-scroll">
        {cardElements}
      </div>
    </>
  );
}

export default AirbnbApp;
