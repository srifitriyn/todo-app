import Input from "./Input"
import TodoList from "./TodoList"
import Filters from "./Filters"

function Container() {
  return (
    <div className="relative phone:w-4/5 tablet:w-2/3 desktop:w-1/2 pt-20 m-auto flex flex-col gap-9">
      <h1 className="text-center text-4xl font-bold text-blue-gray-500">TO DO LIST</h1>
      <div className="flex flex-col gap-2">
        <Input />
        <Filters />
      </div>      
      <TodoList />
    </div>
  )
}

export default Container