import React, { useEffect, useState } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", watchWidth);

    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <h1 className="mt-4 text-4xl font-bold antialiased">
      Window width: {windowWidth}
    </h1>
  );
};

export default WindowTracker;
