import { useState } from "react";
import MemeGeneratorApp from "./components/MemeGeneratorApp/MemeGeneratorApp";
import WindowTracker from "./components/MemeGeneratorApp/WindowTracker";

function App() {
  const [show, setShow] = useState(true);

  const onHandleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-orange-400 text-white flex flex-col items-center py-4 ">
      <button
        onClick={onHandleClick}
        className="w-80 py-3 bg-white shadow-md text-black font-semibold rounded-md"
      >
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
