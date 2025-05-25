import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([{task: "a"}])

    return (
        <div id="todos-container">
            <input type="text" id="todo-input" defaultValue={"aaa"}/>
            <button onClick={() => {
                setTodos(() => ([
                    ...todos,
                    {task: document.querySelector("#todo-input").value.toString()}
                ]))
            }} id="add-todo"></button>
            <h1>{todos[todos.length-1].task}</h1>
        </div>
    )

}

export default TodoList
