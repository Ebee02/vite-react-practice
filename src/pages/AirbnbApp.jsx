import Navbar from "../components/AirbnbApp/Navbar";
import HeroSection from "../components/AirbnbApp/HeroSection";
import cardData from "../components/AirbnbApp/cardData";
import Card from "../components/AirbnbApp/Card";
import "../components/AirbnbApp/css/airbnb.css";
import SearchBar from "../components/AirbnbApp/SearchBar";

function AirbnbApp() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <div className="flex items-center justify-between overflow-y-auto overflow-x-scroll">
        {cardElements}
      </div> */}
      <SearchBar />
    </>
  );
}

export default AirbnbApp;
