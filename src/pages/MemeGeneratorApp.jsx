import { useState } from "react";
import Header from "../components/MemeGeneratorApp/Header";
import Form from "../components/MemeGeneratorApp/Form";
import "../components/MemeGeneratorApp/style.css";
import boxesData from "../components/MemeGeneratorApp/boxesData";
import Boxes from "../components/MemeGeneratorApp/Boxes";

function MemeGeneratorApp() {
  const [squares, setSquares] = useState(boxesData);

  return (
    <div className="antialiased">
      <Header />
      <Form />
    </div>
  );
}

export default MemeGeneratorApp;
