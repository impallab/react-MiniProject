import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const index = state.todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todos[index] = { ...state.todos[index], text }
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer;