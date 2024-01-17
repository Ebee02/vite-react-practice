function SecondForm() {
  return (
    <form
      action="#"
      className="antialiased font-semibold text-slate-800 flex flex-col max-w-sm w-full p-4"
    >
      <label htmlFor="first-name" className="text-xl  mb-2">
        First Name:
      </label>
      <input
        type="text"
        id="first-name"
        className="border border-black p-3 text-xl font-medium rounded-lg shadow-md shadow-gray-300 mb-4"
      />
      <label htmlFor="last-name" className="text-xl  mb-2">
        Last Name:
      </label>
      <input
        type="text"
        id="last-name"
        className="border border-black p-3 text-xl font-medium rounded-lg shadow-md shadow-gray-300 mb-4"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-gray-500 text-white w-32 py-4 rounded-md shadow-gray-300 shadow-md cursor-pointer transition-all duration-300 hover:bg-black hover:tracking-wider"
      />
    </form>
  );
}
export default SecondForm;
