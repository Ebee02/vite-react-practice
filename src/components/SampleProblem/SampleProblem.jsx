import Navbar from "./Navbar";
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import dogData from "./dogData";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";

const SampleProblem = () => {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  function onHandleAddItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }
  const thingsElement = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <>
      <main className="antialiased min-h-screen bg-green-500 text-white">
        <h2 className="text-3xl font-semibold">Sample problem page</h2>

        <div className="m-4">
          <button
            onClick={onHandleAddItem}
            className="w-40 border border-white px-8 py-2 rounded-full uppercase font-semibold duration-150 transition-all hover:bg-white hover:text-green-500"
          >
            Add Item
          </button>
          <div className="mt-3">{thingsElement}</div>
        </div>
      </main>
    </>
  );
};

export default SampleProblem;
