function Counter({ counter, setCounter }) {
    return (
        <>
            <h2 className="counter-header">Counter: {counter}</h2>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            <button onClick={() => setCounter(counter-1)}>Decremente</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </>
    )
}

export default Counter