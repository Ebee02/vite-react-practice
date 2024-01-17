import { useState } from "react";
import Star from "./Star";

function SampleProblem() {
  const [contact, setContact] = useState({
    firstName: "Doggy",
    lastName: "Doe",
    phone: "+123 (888) 223 546",
    email: "email@example.com",
    isFavorite: false,
  });

  function toggleButton() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className="h-screen flex items-center justify-center antialiased">
      <div className="shadow-md shadow-gray-500 w-60 p-4 flex flex-col items-center justify-center rounded-lg">
        <img
          src="../images/dog2.jpg"
          alt=""
          className="w-28 h-28 rounded-full mb-4"
        />
        <div className="w-full">
          <Star isFilled={contact.isFavorite} handleClick={toggleButton} />
          <h1 className="text-3xl font-semibold tracking-wide mb-4">
            {contact.firstName} {contact.lastName}
          </h1>
          <p className="text-slate-400 font-medium text-lg mb-2">
            {contact.phone}
          </p>
          <p className="text-slate-400 font-medium text-lg">{contact.email}</p>
        </div>
      </div>
    </div>
  );
}
export default SampleProblem;
