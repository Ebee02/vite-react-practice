import Navbar from "./Navbar";
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import dogData from "./dogData";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";

const SampleProblem = () => {
  const [isImportant, setIsImportant] = useState("Yeah");
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  function onHandleAddItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }

  function onHandleClick() {
    setIsImportant((prevState) => !prevState);
  }

  const thingsElement = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <>
      <main className="antialiased min-h-screen bg-green-500 text-white flex items-center justify-center">
        <div className="w-[560px] h-[260px] bg-gray-800 rounded-md shadow-lg mt-4 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-lg">is state important to know?</h1>

          <div
            onClick={onHandleClick}
            className="w-32 h-32 cursor-pointer bg-white rounded-full  shadow-lg text-black flex items-center justify-center"
          >
            <p className="font-semibold text-2xl ">{isImportant}</p>
          </div>
        </div>
        {/* <h2 className="text-3xl font-semibold">Sample problem page</h2>

        <div className="m-4">
          <button
            onClick={onHandleAddItem}
            className="w-40 border border-white px-8 py-2 rounded-full uppercase font-semibold duration-150 transition-all hover:bg-white hover:text-green-500"
          >
            Add Item
          </button>
          <div className="mt-3">{thingsElement}</div>
        </div> */}
      </main>
    </>
  );
};

export default SampleProblem;
