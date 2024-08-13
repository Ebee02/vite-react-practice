import SampleProblem from "../components/SampleProblem/SampleProblem";
import { FaEnvelopeOpen } from "react-icons/fa";

const SampleProblemApp = () => {
  return (
    <section className="antialiased text-slate-600 px-6 max-w-screen-2xl min-h-screen">
      <div className="py-6">
        <h2 className="text-2xl font-bold text-violet-600">fc</h2>
      </div>

      <section className="flex flex-col gap-20 py-12">
        {/* Description section begins */}
        <section className="">
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
        <section>
          <div className="bg-white shadow-xl rounded-lg max-w-lg">
            <div className="grid place-items-center bg-violet-400 p-8 text-white rounded-t-lg">
              <FaEnvelopeOpen size={30} className="" />
            </div>
            <div className="p-10">
              <p>Get notified of all the updates</p>
              <form className="flex flex-col gap-3 mt-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-violet-500"
                />
                <button className="bg-violet-400 px-4 py-2 cursor-pointer rounded-md text-white font-semibold">
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Subscribe section ends */}
      </section>
    </section>
  );
};

export default SampleProblemApp;
