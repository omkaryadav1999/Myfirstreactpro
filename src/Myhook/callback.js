import React, { useState, useCallback } from "react"
import Child from "./mcall"


function Usecallback() {
    const [increase, setIncrease] = useState(0)
    const [todo, setTodo] = useState([])
    const increasefun = () => {
        console.log("increase")
        setIncrease(increase + 1)
    }

    const mytodo = useCallback(() => {
        setTodo((pre) => [...pre, "new Entry"])

    }, [todo])

    return (
        <>
            <h1>{increase}</h1>
            <Child value={todo} fun={mytodo} />
            <button type="button" onClick={increasefun}>click in</button>
        </>
    )
}



export default Usecallback