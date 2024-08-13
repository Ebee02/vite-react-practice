import Navbar from "./Navbar";
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import dogData from "./dogData";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import ToDoList from "./ToDoList";
import { FaRegStar, FaStar } from "react-icons/fa";

const SampleProblem = () => {
  // const [isImportant, setIsImportant] = useState(true);
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact((prevState) => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite,
      };
    });
  }

  return (
    <main className="h-screen w-full flex justify-center py-4  antialiased text-slate-800">
      <article className="h-[300px]  border border-gray-300 shadow-2xl rounded-xl p-3">
        <div className="w-full flex items-center justify-center">
          <img
            src="./images/swiming-lady.png"
            className="h-28 w-28 rounded-full"
          />
        </div>
        <div className="card--info mt-3 flex flex-col  gap-3">
          {/* <FaRegStar
            onClick={toggleFavorite}
            size={20}
            className="cursor-pointer"
          /> */}

          {contact.isFavorite ? (
            <FaStar
              onClick={toggleFavorite}
              size={20}
              className="cursor-pointer"
            />
          ) : (
            <FaRegStar
              onClick={toggleFavorite}
              size={20}
              className="cursor-pointer"
            />
          )}
          <h2 className="text-3xl font-semibold tracking-tight">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="font-medium text-sm text-gray-500 ">{contact.phone}</p>
          <p className="font-medium text-sm text-gray-500">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default SampleProblem;
