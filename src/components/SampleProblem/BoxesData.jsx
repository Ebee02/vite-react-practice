export default [
  { id: 1, on: true },
  { id: 2, on: false },
  { id: 3, on: true },
  { id: 4, on: false },
  { id: 5, on: true },
  { id: 6, on: false },
];

// import { useState } from "react";

// import MemeGeneratorApp from "./components/MemeGeneratorApp/MemeGeneratorApp";
// import AirbnbApp from "./components/AirbnbApp/AirbnbApp";
// import Contact from "./components/ContactUs/Contact";
// import SampleProblem from "./components/MemeGeneratorApp/SampleProblem";
// import ExampleComponent from "./components/MemeGeneratorApp/ExampleComponent";
// import Count from "./components/MemeGeneratorApp/Count";
// import boxesData from "./components/SampleProblem/BoxesData";
// import Box from "./components/SampleProblem/Box";

// function App() {
//   const [squareBoxes, setSquareBoxes] = useState(boxesData);

//   function toggle(id) {
//     setSquareBoxes((prevSquare) => {
//       return prevSquare.map((square) => {
//         return square.id === id ? { ...square, on: !square.on } : square;
//       });
//     });
//   }

//   const boxElements = squareBoxes.map((square) => (
//     <Box key={square.id} on={square.on} toggle={toggle} id={square.id} />
//   ));
//   return <main className="p-4">{boxElements}</main>;
// }
// export default App;
