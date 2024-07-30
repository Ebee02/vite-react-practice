import { VscPinned } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const ToDoItem = ({ data }) => {
  return (
    <div className="antialiased text-slate-800 border border-gray-300 rounded-lg shadow-md w-full bg-gray-100 px-6 py-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="border-4 border-amber-700 h-5 w-5 rounded-full cursor-pointer bg-stone-700"></div>
          <h3 className="text-gray-600 tracking-tight">{data.text}</h3>
        </div>
        <div className="flex items-center gap-2">
          <VscPinned size={22} className="cursor-pointer" />
          <MdDelete size={22} className="cursor-pointer" />
          <AiFillEdit size={22} className="cursor-pointer" />
        </div>
      </div>
      <p className="text-sm font-medium text-amber-700">{data.timeUpdated}</p>
    </div>
  );
};

export default ToDoItem;
