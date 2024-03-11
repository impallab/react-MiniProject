import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoContextProvider } from "./contexts"

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos])
  }
  //updating TODO if the given id exists : 
  const updateTodo = (id, newTodo) => {
    setTodos((prevTodos) => prevTodos.map((eachTodo) => (eachTodo.id === id ? newTodo : eachTodo)))
  }
  // To mark the TODO as completed or not :
  const isComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((eachTodo) => eachTodo.id === id ? { ...eachTodo, isComplete: !eachTodo.isComplete } : eachTodo))
  }

  //filtering out each TODO which does'nt match the id to delete the particular TODO:
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id != id));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodoContextProvider value={{ todos, createTodo, updateTodo, isComplete, deleteTodo }}>

      <h2 className="bg-zinc-800 p-6 text-pink-700 text-center text-5xl underline "><i className="bg-zinc-600 p-2 rounded-xl  border border-l-sky-400  border-r-red-600"><span className="hover:text-orange-400">TODO</span>  <span className="hover:text-white">With</span>  <span className="hover:text-lime-500">Localstorage</span></i></h2 >

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md shadow-indigo-200 rounded-lg px-4 py-3 text-white hover:bg-[#0d083e]">
          <h1 className="text-4xl font-bold text-center mb-8 mt-2">Track Your Task</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
