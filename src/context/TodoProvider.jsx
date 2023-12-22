import { useEffect, useReducer } from "react";
import { TodoContext, reducer, initialState } from "./TodoContext";
const STORAGE_KEY = "TODO_APP";

function TodoProvider({ children }) {
  const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const [state, dispatch] = useReducer(reducer, {
    todos: storedTodos || initialState,
    filter: initialState.filter,
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
  }, [state.todos]);

  function addTodo(inputTodo) {
    dispatch({
      type: "add_todo",
      inputTodo,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "delete_todo",
      id,
    });
  }

  function isDoneTodo(id) {
    dispatch({
      type: "toggle_done",
      id,
    });
  }

  function setFilter(filter) {
    dispatch({
      type: "set_filter",
      filter,
    });
  }

  function updateTodo(id, updatedTask) {
    dispatch({
        type: "update_todo",
        id,
        updatedTask,
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        isDoneTodo,
        filter: state.filter,
        setFilter,
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
