import { useState } from "react";

const jokeData = [
  {
    id: 1,
    setup: "I got my daughter a fridge for her birthday",
    punchline: "I can't wait to see her face lit up when she open it",
  },
  {
    id: 2,
    setup: "How did the hacker escape the police",
    punchline: "He just ransonware",
  },
  {
    id: 3,
    punchline:
      "It's hard to explain puns to a keptomanic, because they always take things literally",
  },
  {
    id: 4,
    setup: "Why was the scarecrow give an oscar?",
    punchline: "Because he was outstanding in the fields",
  },
];

const Joke = () => {
  function onHandleDisplayPunchline() {
    setDisplayPunchline(!displayPunchline);
    console.log(displayPunchline);
  }
  return (
    <main className="antialiased min-h-screen bg-[cornsilk] text-slate-900">
      {jokeData.map((joke) => (
        <div className="p-2">
          {joke.setup && (
            <h1 className="text-2xl font-semibold">Setup: {joke.setup}</h1>
          )}
          {displayPunchline === true && (
            <p className="text-lg font-medium  text-[orangered]">
              Punchline: {joke.punchline}
            </p>
          )}
          <button
            onClick={onHandleDisplayPunchline}
            className="w-40 rounded-sm bg-black text-sm text-white font-semibold p-2 uppercase duration-150 transition-all hover:bg-white hover:text-black shadow-lg"
          >
            Show punchline
          </button>
          <hr className="border border-black my-2" />
        </div>
      ))}
    </main>
  );
};

export default Joke;
