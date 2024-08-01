import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-4 border-b border-gray-200"
                    >
                        <span class="text-lg text-gray-700">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
