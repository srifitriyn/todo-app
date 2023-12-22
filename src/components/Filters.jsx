import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Filters() {
  const { setFilter } = useContext(TodoContext);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <select
        className="px-3 py-2 rounded-md bg-winterBlue-1 text-blue-gray-500"
        name="filter"
        id="filter"
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default Filters;
