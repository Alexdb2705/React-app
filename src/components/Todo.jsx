function Todo({ task, description }) {
    function changeToDoColor(element) {
        let parent = element.target.parentNode
        parent.style.backgroundColor === "red"
            ? parent.style.backgroundColor = "transparent"
            : parent.style.backgroundColor = "red"
    }
    return (
        <div className="todo-item">
            <h2>{task}</h2>
            {/* <p>{description}</p> */}
            <button onClick={(_) => changeToDoColor(_)} className="delete-btn">Delete</button>
        </div>
    )
}

export default Todo