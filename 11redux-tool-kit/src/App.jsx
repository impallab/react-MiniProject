import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
function App() {
  return (
    <>
      <div className="bg-black/70 min-h-screen text-center   ">
        <h3 className="bg-black/50 w-fit mx-96 px-28 border border-l-red-700 border-r-red-700 border-b-cyan-300 rounded-lg text-center text-4xl text-white p-3 ">Task-Tracker Using Redux-Toolkit</h3>
        <AddTodo />
        <Todo />
      </div>
    </>
  )
}

export default App
