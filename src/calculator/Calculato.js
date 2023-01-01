import React, { useRef, useState, useEffect, useReducer } from "react"



const initialState = { value: "" }

const reducer = (state, action) => {
    const number1 = parseInt(action.num1)
    const number2 = parseInt(action.num2)
    if (isNaN(number1) || isNaN(number2)) return initialState

    switch (action.operator) {
        case "+":
            return { value: number1 + number2 }
        case "-":
            return { value: number1 - number2 }
        case "*":
            return { value: number1 * number2 }
        case "/":
            return { value: number1 / number2 }
        case "AC":
            return { value: "" }
        default:
            return state
    }
}


function Calculator() {
    const [userinput, setUserinput] = useState("")
    const [operator, setOperator] = useState("")
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [state, Dispatch] = useReducer(reducer, initialState)
    const callref = useRef()

    const update = (e) => {
        if (e.target.name === "calculation") {
            setOperator(e.target.value)
        } else {
            setUserinput(e.target.value)
        }
    }

    useEffect(() => {

        callref.current.value += userinput

    }, [userinput])

    useEffect(() => {
        if (operator === "AC") {
            callref.current.value = ""
        } else {
            callref.current.value += operator
        }

    }, [operator])
    const total = () => {
        const save = callref.current.value.split(operator)
        setNum1(save[0])
        setNum2(save[1])
    }

    useEffect(() => {
        Dispatch({ operator, num1, num2 })
    }, [operator, num1, num2])
    return (
        <>
            <div>
                <h1>{state.value}</h1>
                <input type="text" ref={callref} /><br />
                <input type="button" onClick={update} value="9" />
                <input type="button" onClick={update} value="8" />
                <input type="button" onClick={update} value="7" />
                <input type="button" name="calculation" onClick={update} value="/" /><br />
                <input type="button" onClick={update} value="6" />
                <input type="button" onClick={update} value="5" />
                <input type="button" onClick={update} value="4" />
                <input type="button" name="calculation" onClick={update} value="*" /><br />
                <input type="button" onClick={update} value="3" />
                <input type="button" onClick={update} value="2" />
                <input type="button" onClick={update} value="1" />
                <input type="button" name="calculation" onClick={update} value="+" /><br />
                <input type="button" onClick={update} value="0" />
                <input type="button" name="calculation" onClick={update} value="AC" />
                <input type="button" name="calculation" onClick={update} value=" - " />
                <input type="button" onClick={total} value="=" />

            </div>
        </>

    )
}

export default Calculator

