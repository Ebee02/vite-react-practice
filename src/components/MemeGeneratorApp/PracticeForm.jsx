import { useState } from "react";

const PracticeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  console.log(formData);
  return (
    <main className="min-h-screen flex items-center justify-center antialiased text-slate-800">
      <form className="flex flex-col gap-6 w-[400px] p-6 border border-gray-300 rounded-sm shadow-md">
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />

        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />

        <input
          type="email"
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <textarea
          rows={3}
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Comments"
          name="comments"
          onChange={handleChange}
          value={formData.comments}
        />

        <div>
          <input
            type="checkbox"
            name="isFriendly"
            id="isFriendly"
            className="w-4 h-4 mr-2"
            checked={formData.isFriendly}
            onChange={handleChange}
          />
          <label htmlFor="isFriendly">Are you Friendly?</label>
        </div>
      </form>
    </main>
  );
};

export default PracticeForm;
