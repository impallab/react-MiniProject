import React from "react";
import { useTodoContext } from "../contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = React.useState("");
    const { createTodo } = useTodoContext();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;
        createTodo({ todo, iscomplete: false });
        setTodo("") //cleaning  the input field after adding a new task.

    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Note your task here..."
                className="w-full border border-green-600 rounded-l-full px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-full px-5 py-2 bg-green-600 text-white shrink-0 opacity-80 hover:opacity-100">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

