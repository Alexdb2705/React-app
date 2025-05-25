import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2 className="counter-header">Counter: {count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter