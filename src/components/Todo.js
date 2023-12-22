import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSLice'

const Todo = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos)
    const dispatch = useDispatch()
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                >{todo.text}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                    >X</button></li>
            ))}
        </>
    )
}

export default Todo