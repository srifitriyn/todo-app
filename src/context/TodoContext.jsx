import { createContext } from "react";

export const TodoContext = createContext();

const STORAGE_KEY = "TODO_APP";

const initialState = {
  todos: [],
  filter: "all"
};

function reducer(state, action) {
  switch (action.type) {
    case "add_todo": {
      const newTodo = {
        id: new Date().getTime(),
        task: action.inputTodo,
        isDone: false,
      };
    
      const newState = {
        todos: [newTodo, ...state.todos],
        filter: state.filter
      };
    
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState.todos));
      return newState;
    }
    case "delete_todo": {
      const filterTodos = state.todos.filter((item) => {
        return item.id !== action.id;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filterTodos));
      return { todos: filterTodos, filter: state.filter };
    }
    case "toggle_done": {
      const completeTodos = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completeTodos));
      return { todos: completeTodos, filter: state.filter };
    }
    case "set_filter": {
      return {...state, filter: action.filter}
    }
    case "update_todo": {
      const updatedTodos = state.todos.map((todo) => 
      todo.id === action.id ? {...todo, task: action.updatedTask} : todo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };
    }
    default:
      return state;
  }
}

export { initialState, reducer };
