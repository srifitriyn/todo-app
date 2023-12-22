import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import toast, { Toaster } from "react-hot-toast";

function Input() {
  const [inputTodo, setInputTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (inputTodo.trim() !== "") {
      addTodo(inputTodo.trim());
      setInputTodo("");
      toast.success("Todo Added");
    } else {
      toast.error("Please enter a task before adding.")
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTodo();
    }
  };
  return (
    <div className="w-full m-auto">
      <form className="w-full flex gap-4 phone:text-sm">
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          className="block w-full px-4 py-1 mt-2 basis-4/5 phone:basis-2/3 tablet:basis-2/3 border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="What are you going to do?"
          required
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-gray-500 px-4 py-2 mt-2 rounded-lg text-white"
          type="button"
        >
          Add Task
        </button>
      </form>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              background: "#eaf4f7",
              color: "#4C9CCC"
            }
          },
          error: {
            duration: 2000,
            style: {
              background: "#eaf4f7",
              color: "#4C9CCC"
            }
          }
        }}
      />
    </div>
  );
}

export default Input;
