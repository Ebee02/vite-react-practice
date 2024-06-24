import Navbar from "../components/AirbnbApp/Navbar";
import HeroSection from "../components/AirbnbApp/HeroSection";
import cardData from "../components/AirbnbApp/cardData";
import Card from "../components/AirbnbApp/Card";
import "../components/AirbnbApp/css/airbnb.css";

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
