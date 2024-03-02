import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function (params) {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <h1 className="mt-4 text-4xl font-bold antialiased">
      Window width: {windowWidth}
    </h1>
  );
};

export default WindowTracker;
