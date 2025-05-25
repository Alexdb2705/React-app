import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({ name: "Alex", age: 22 })
    // 1. Use a callback within setState to access the previous value
    // 2. Spread all the properties of prev object into new object
    // 3. Change the property that you want to change
    return (
        <>
            <label htmlFor="#fontSize-change">Font-size of counter:</label>
            <input type="number" id="fontSize-change" onChange={(event) => {document.querySelector("#counter-header").style.fontSize = event.target.value+"px"}} />
            <div>
                <h2 id="counter-header">Counter: {count}</h2>
                <h2 className="user-header">User: {user.name}, {user.age} years.</h2>
                <input type="text" id="name-input" />
                <button onClick={() =>
                    setUser(prevUser => ({
                        ...prevUser,
                        name: document.querySelector("#name-input").value
                    }))
                }>Change name</button>
                <button onClick={() =>
                    setUser(prevUser => ({
                        ...prevUser,
                        age: prevUser.age + 1
                    }))
                }>Increment age</button>
                <button onClick={() =>
                    setUser(prevUser => ({
                        ...prevUser,
                        age: prevUser.age - 1
                    }))
                }>Decrement age</button>
                <button onClick={() => {
                    setCount(prevCount => prevCount + 1);
                    setCount(prevCount => prevCount + 1)
                }}>Increment 2 correct</button>
                <button onClick={() => {
                    setCount(count + 1);
                    setCount(count + 1)
                }}>Increment 2 incorrect</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}

export default Counter