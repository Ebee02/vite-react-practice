import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="bg-[#F55A5A] h-10 flex items-center justify-center py-10 text-white">
        <img
          src="/src/assests/images/globe.png"
          alt="globe icon"
          className="mr-2 cursor-pointer"
        />

        <p className="font-light text-lg">my travel journal.</p>
      </h1>
    </header>
  );
};

export default Header;
