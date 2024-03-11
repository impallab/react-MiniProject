import { useContext, createContext } from "react";
//creation of TodoContext : a global context for the app, to share data between components.
export const TodoContext = createContext({
    todos: [
        {
            id: new Date().getTime(),
            title: "TODO Title",
            isComplete: false

        }
    ],
    createTodo: (todos) => { },
    updateTodo: (id, todo) => { },
    isComplete: (id) => { },
    deleteTodo: (id) => { }

});

//creation of  provider component that will wrap our App in order to provide the value (data) to any child component
export const TodoContextProvider = TodoContext.Provider

//creation and export of custom hook  that will allow any component to access the data stored in the context using this hook.
export const  useTodoContext=()=> {
    return useContext(TodoContext);
}