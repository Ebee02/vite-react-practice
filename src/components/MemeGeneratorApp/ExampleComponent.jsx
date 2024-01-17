import { useState } from "react";

function ExampleComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="antialiased  h-screen flex  items-center justify-center ">
      <form className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-4">
        <input
          className="border-2 border-gray-400 p-2 rounded-md tracking-wide shadow-lg shadow-gray-300"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
        />
        <input
          className="border-2 border-gray-400 p-2 rounded-md tracking-wide shadow-lg shadow-gray-300"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
        />
        <input
          className="border-2 border-gray-400 p-2 rounded-md tracking-wide shadow-lg shadow-gray-300"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
      </form>
    </div>
  );
}
export default ExampleComponent;
