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
            <input defaultValue={30} type="number" id="fontSize-change" onChange={(event) => {document.querySelector("#counter-header").style.fontSize = event.target.value+"px"}} />
            <div>
                <h2 id="counter-header">Counter: {count}</h2>
                <h2 className="user-header">User: {user.name}, {user.age} years.</h2>
                <input type="text" id="name-input" />
                <button onClick={() =>
                    setUser(prevUser => ({
                        ...prevUser,
                        name: document.querySelector("#name-input").value
                    }))
                }>Change/set name</button>
                <button onClick={() =>
                    setUser(prevUser => ({
                        ...prevUser,
                        age: prevUser.age + 1
                    }))
                }>Increment age by 1</button>
                <button onClick={() =>
                    setUser(prevUser => ({
                        ...prevUser,
                        age: prevUser.age - 1
                    }))
                }>Decrement age by 1</button>
                <button onClick={() => {
                    setCount(prevCount => prevCount + 1);
                    setCount(prevCount => prevCount + 1)
                }}>Increment counter by 2 correct</button>
                <button onClick={() => {
                    setCount(count + 1);
                    setCount(count + 1)
                }}>Increment counter by 2 incorrect</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}

export default Counter