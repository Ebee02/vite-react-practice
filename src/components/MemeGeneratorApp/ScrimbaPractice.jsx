import { useState } from "react";

const ScrimbaPractice = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(formData);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form action="" className="flex flex-col gap-5 w-[300px] ">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border-2 border-grey-300 py-3 px-4 rounded-md shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border-2 border-grey-300 py-3  px-4 rounded-md shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-grey-300 py-3  px-4 rounded-md shadow-md"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="py-3 border-2 border-black rounded-sm cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ScrimbaPractice;
