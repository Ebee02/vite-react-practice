import { FaSearch } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import "../../pages/main.css";
import { useState } from "react";

const SearchBar = () => {
  const [isSearchBarActive, setIsSearchBarActive] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const onHandleSearchBar = () => {
    setIsSearchBarActive((prevState) =>
      prevState === "active" ? "" : "active",
    );
  };

  const onHandleSearchValue = () => {
    setSearchValue("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-cyan-500">
      <div
        className={`${
          isSearchBarActive === "active" ? "w-[330px]" : "w-[60px]"
        } h-[60px] bg-white rounded-full relative transition-all duration-600 overflow-hidden`}
      >
        <div className="absolute left-[30px] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <FaSearch
            onClick={onHandleSearchBar}
            size={21}
            className="cursor-pointer  text-gray-500"
          />
        </div>

        <div className="relative w-[250px] h-[60px] left-[60px] flex items-center justify-center">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="absolute top-0 w-full h-full p-2 rounded-md focus:outline-none tracking-wide"
          />
          <FcCancel
            onClick={onHandleSearchValue}
            size={21}
            className="absolute right-[25px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          />
        </div>
      </div>
    </main>
  );
};

export default SearchBar;
