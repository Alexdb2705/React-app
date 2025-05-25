import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2 className="counter-header">Counter: {count}</h2>
            <button onClick={() => 
                {setCount(prevCount => prevCount +1);
                setCount(prevCount => prevCount +1)
                }}>Increment 2 correct</button>
            <button onClick={() => 
                {setCount(count+1);
                setCount(count+1)
                }}>Increment 2 incorrect</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter