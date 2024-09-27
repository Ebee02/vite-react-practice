import { useState } from "react";
import Header from "../components/MemeGeneratorApp/Header";
import Form from "../components/MemeGeneratorApp/Form";
import "../components/MemeGeneratorApp/style.css";
import boxesData from "../components/MemeGeneratorApp/boxesData";
import Boxes from "../components/MemeGeneratorApp/Boxes";

function MemeGeneratorApp() {
  const [squares, setSquares] = useState(boxesData);

  // const toggle = (id) => {
  //   setSquares((prevState) => {
  //     return prevState.map((square) => {
  //       return square.id === id ? { ...square, on: !square.on } : square;
  //     });
  //   });
  // };

  const toggle = (id) => {
    setSquares((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElement = squares.map((square) => (
    <Boxes
      key={square.id}
      on={square.on}
      id={square.id}
      toggle={() => toggle(square.id)}
    />
  ));

  return (
    <div className="antialiased">
      {/* <Header />
      <Form /> */}
      {squareElement}
    </div>
  );
}

export default MemeGeneratorApp;
