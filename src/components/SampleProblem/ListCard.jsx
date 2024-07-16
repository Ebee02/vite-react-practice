import dogData from "./dogData";
import { motion } from "framer-motion";

const ListCard = ({}) => {
  return (
    <div className="">
      {dogData.map((data) => (
        <motion.div
          layoutId={data.dogImage}
          className="border border-gray-300 shadow-lg p-4 rounded-2xl m-2"
        >
          <div className="flex items-center gap-6">
            <img
              className="w-8 h-8 rounded-full"
              src={data.dogImage}
              alt="dog image"
            />
            <p className="text-gray-500 font-medium">{data.title}</p>
          </div>
          <div className="flex">
            <img
              className="mt-4 w-20 h-20"
              src={data.bannerImage}
              alt="dog image"
            />

            <div className="px-6 mt-4">
              <p className="font-semibold mb-1">{data.taskDate}</p>
              <p className="text-gray-500">{data.summary}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ListCard;
