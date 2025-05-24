function Todo({ task, description }) {
    function getParent(element) {
        return element.target.parentNode
    }
    return (
        <div className="todo-item">
            <h2>{task}</h2>
            <p>{description}</p>
            <button onClick={(_) => getParent(_).style.backgroundColor === "transparent" ? getParent(_).style.backgroundColor = "red" : getParent(_).style.backgroundColor = "transparent"} className="delete-btn">Delete</button>
        </div>
    )
}

export default Todo