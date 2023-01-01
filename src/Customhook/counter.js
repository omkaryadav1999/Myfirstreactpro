import React, { useState } from "react";
import useContincrease from "./useContincrease"

function Counter() {
    const [count, setCount] = useState(0)
    useContincrease(count)
    const updateCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={updateCount}>updateCount</button>
        </>
    )
}

export default Counter