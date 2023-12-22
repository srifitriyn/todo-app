import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Checkbox,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

function TodoList() {
  const { todos, deleteTodo, isDoneTodo, filter, updateTodo } =
    useContext(TodoContext);
  const [editTask, setEditTask] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleToggleDone = (id) => {
    isDoneTodo(id);
  };
  const handleEdit = (id, task) => {
    setEditTask(id);
    setEditedTask(task);
  };
  const handleEditSave = (id) => {
    if (editedTask.trim() === "") {
      toast.error("Please enter a valid task before saving.");
      return;
    }
    updateTodo(id, editedTask);
    setEditTask(null);
    setEditedTask("");
  };
  let filteredTodos = todos;
  if (filter === "complete") {
    filteredTodos = todos.filter((todo) => todo.isDone);
  } else if (filter === "incomplete") {
    filteredTodos = todos.filter((todo) => !todo.isDone);
  }

  if (filteredTodos.length === 0) {
    return <p>No todos to display.</p>;
  }

  return (
    <Card className="w-full">
      <List>
        {filteredTodos.map((todo) => (
          <ListItem
            ripple={false}
            className={`py-1 pr-1 pl-4 ${
              todo.isDone ? "line-through text-gray-500" : ""
            }`}
            key={todo.id}
          >
            <Checkbox
              checked={todo.isDone}
              onChange={() => handleToggleDone(todo.id)}
            />
            {editTask === todo.id ? (
              <input
                className="block w-full px-4 py-1 border basis-4/5 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <span>{todo.task}</span>
            )}
            <ListItemSuffix className="flex gap-2">
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} size="2xl" />
              </IconButton>
              {editTask === todo.id ? (
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={() => handleEditSave(todo.id)}
                >
                  <FontAwesomeIcon icon={faFloppyDisk} size="2xl" />
                </IconButton>
              ) : (
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={() => handleEdit(todo.id, todo.task)}
                >
                  <FontAwesomeIcon icon={faPenSquare} size="2xl" />
                </IconButton>
              )}
            </ListItemSuffix>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default TodoList;
