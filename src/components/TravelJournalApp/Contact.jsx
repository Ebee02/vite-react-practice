import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = (props) => {
  return (
    <div className=" border border-gray-300 rounded-xl p-3 shadow-md shadow-gray-400">
      <img
        src={props.img}
        alt="dog 1"
        className="w-full h-[160px] rounded-sm"
      />
      <h1 className="text-lg font-semibold mb-2">{props.docker}</h1>
      <div className="text-gray-500 flex items-center gap-2">
        <div>
          <BsFillTelephoneFill className="text-lg" />
        </div>
        <p>{props.telePhone}</p>
      </div>
      <div className="text-gray-500 flex items-center gap-2">
        <div>
          <SiGmail className="text-lg" />
        </div>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Contact;
