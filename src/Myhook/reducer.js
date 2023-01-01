import React, { useReducer } from "react"

const initialState = 0;


function reducer(state, action) {
    if (action.type === "increase") {
        return state + 1
    }
    if (action.type === "decrement") {
        return state - 1
    }
    return state

}

function Reduce() {
    const [state, Dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => Dispatch({ type: "increase" })}>increment</button>
            <button onClick={() => Dispatch({ type: "decrement" })}>decrement</button>
        </>
    )

}

export default Reduce

