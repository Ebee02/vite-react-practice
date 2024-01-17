import { useState } from "react";

function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown((prevState) => !prevState);
  }

  let buttonName = isShown ? "Hide punchline" : "Show punchline";

  return (
    <div className="p-4 antialiased font-semibold text-slate-800">
      {props.setup && (
        <h1 className="text-3xl tracking-wide mb-2">
          <span className="text-blue-500 ">Setup:</span> {props.setup}
        </h1>
      )}
      {isShown && (
        <p className="text-xl mb-2">
          <span className="text-red-500">Punchline: </span>
          {props.punchline}
        </p>
      )}
      <button
        onClick={toggle}
        className="mb-2 px-8 py-2 cursor-pointer rounded-md bg-black text-white tracking-wide"
      >
        {buttonName}
      </button>
      <hr className="border border-black" />
    </div>
  );
}
export default Joke;
