import SampleProblem from "../components/SampleProblem/SampleProblem";
import { FaEnvelopeOpen } from "react-icons/fa";

const SampleProblemApp = () => {
  return (
    <section className="antialiased text-slate-600 px-8 md:px-14 max-w-screen-2xl min-h-screen">
      <div className="py-6">
        <h2 className="text-3xl font-bold text-violet-600">fc</h2>
      </div>

      <section className="flex max-lg:flex-col gap-20 py-12 md:py-20">
        {/* Description section begins */}
        <section className="flex-1 ">
          <h1 className="font-semibold text-6xl leading-tight text-slate-800">
            Join us at the biggest FrontConf
          </h1>
          <p className="mt-2 text-violet-500 text-xl">July 2023 - Bengaluru</p>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste corporis, amet animi accusantium provident praesentium eos quo
            nam nihil a totam temporibus eaque non ullam atque ea quaerat?
            Molestias.
          </p>
        </section>
        {/* Description section ends */}
        {/* Subscribe section begins */}
        <section className="flex-1">
          <div className="bg-white shadow-xl rounded-lg max-w-lg">
            <div className="grid place-items-center bg-violet-400 p-8 text-white rounded-t-lg">
              <FaEnvelopeOpen size={30} className="" />
            </div>
            <div className="p-10">
              <p>Get notified of all the updates</p>
              <form className="mt-3 flex max-sm:flex-col max-sm:gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className=" rounded-md sm:rounded-r-none border border-gray-300 grow px-4 py-2 focus:outline-none focus:border-violet-500"
                />
                <button className="bg-violet-400 px-4 py-2 cursor-pointer rounded-md sm:rounded-l-none text-white font-semibold">
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Subscribe section ends */}
      </section>
      <footer className="py-8">
        <ul className="flex items-center gap-6 text-sm text-slate-500">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default SampleProblemApp;
