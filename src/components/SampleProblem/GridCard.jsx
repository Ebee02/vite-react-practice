import dogData from "./dogData";
import { motion } from "framer-motion";

const GridCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {dogData.map((data) => (
        <motion.div
          key={data.id}
          layout={data.dogImage}
          className="w-72 border border-gray-300 shadow-lg p-4 rounded-2xl m-2"
        >
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full"
              src={data.dogImage}
              alt="dog image"
            />
            <p className="text-gray-500 font-medium">{data.title}</p>
          </div>
          <img
            className="mt-4 w-full h-60"
            src={data.bannerImage}
            alt="dog image"
          />

          <div className="px-6 mt-4">
            <p className="font-semibold mb-1">{data.taskDate}</p>
            <p className="text-gray-500">{data.summary}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GridCard;
