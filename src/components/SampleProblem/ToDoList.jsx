import { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const addToDoItem = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    const newTodoItem = {
      id: Date.now(),
      taskTitle: inputText,
      isCompleted: false,
      timeUpdated: "Just now",
    };

    setTodoList((prevTodoItems) => [...prevTodoItems, newTodoItem]);
    inputRef.current.value = "";
  };

  return (
    <div className="bg-amber-700 min-h-screen text-slate-800 flex items-center justify-center">
      <div className="bg-white w-11/12 max-w-md flex flex-col p-5 min-h-[500px] rounded-md border border-gray-300 shadow-xl">
        <div className="flex items-center mt-5">
          <p className="text-3xl font-semibold tracking-tight">To-do List</p>
        </div>
        <div className="flex items-center my-7 bg-gray-100 rounded-full shadow-sm">
          <input
            type="text"
            ref={inputRef}
            placeholder="Add new task"
            className="bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600"
          />
          <button
            onClick={addToDoItem}
            className="uppercase border-none rounded-full w-32 h-12 text-sm font-medium cursor-pointer bg-stone-700 text-white"
          >
            Add +
          </button>
        </div>

        <div className="flex flex-col gap-5 h-80 overflow-y-scroll p-2">
          {todoList.map((item) => (
            <ToDoItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
