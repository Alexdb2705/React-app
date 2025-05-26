import { useState } from "react"

function Todo({ task, setPopupOpen }) {
    const [thisTask, setThisTask] = useState({ task: task })
    function changeToDoColor(element) {
        let parent = element.target.parentNode
        parent.style.backgroundColor === "red"
            ? parent.style.backgroundColor = "transparent"
            : parent.style.backgroundColor = "red"
    }
    return (
        thisTask.task !== "" ?
        <div className="todo-item">
            <h2>{thisTask.task}</h2>
            {/* <p>{description}</p> */}
            <button onClick={() => {
                setPopupOpen((prevPopup) => (!prevPopup)); setThisTask(prevTask => ({
                    ...prevTask, task: ""
                }))
            }} className="delete-btn">Delete</button>
        </div>
        : null
    )
}

export default Todo