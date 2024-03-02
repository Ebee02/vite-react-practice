import { useEffect, useState } from "react";

const ApiPractice = () => {
  const [count, setCount] = useState(1);
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count],
  );

  return (
    <div className="m-4 antialiased text-slate-900">
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 border rounded-lg shadow-md mb-4"
      >
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};
export default ApiPractice;
