import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice';
function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (event) => {
        event.preventDefault();
        //dispatch method change in the store through the reducer :
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 bg-white/5 p-12 pb-0 border border-white/20 min-h-fit">
            <input
                type="text"
                className="text-center mb-14 bg-white/20 rounded-l-full border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-0.5 px-48 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Add your task ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-white py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded-r-full text-lg"
            >
                ➕
            </button>
        </form>
    )
}

export default AddTodo