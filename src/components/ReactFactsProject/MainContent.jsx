import "../../style.css";

function MainContent() {
  return (
    <main className="text-white px-8">
      <h1 className="text-5xl font-semibold mb-10 uppercase">
        Fun facts about React
      </h1>
      <ul className="pl-20 marker:text-[#61DAFB] marker:text-2xl  flex flex-col list-disc text-lg tracking-wide gap-y-4 font-semibold max-w-lg">
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 100k stars on Github.</li>
        <li>Is maintain by Facebook.</li>
        <li>Power thousands of application, including mobile app.</li>
      </ul>
    </main>
  );
}

export default MainContent;
