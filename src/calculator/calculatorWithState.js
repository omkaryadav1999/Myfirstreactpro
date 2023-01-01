import React, { useState } from "react"

const CalculatorwithState = () => {
    const [userinput, setUserinput] = useState("")

    const update = (e) => {
        setUserinput(userinput.concat(e.target.value))
    }
    const total = () => {
        setUserinput(eval(userinput))
    }
    const back = () => {
        setUserinput(userinput.slice(0, -1))
    }
    const clear = () => {
        setUserinput("")
    }
    return (
        <>
            <div>
                <input type="text" value={userinput} /><br />
                <button type="button" onClick={clear}>clear</button>
                <button type="button" onClick={back}>back</button>
                <br />
                <button type="button" onClick={update} value="9">9</button>
                <button type="button" onClick={update} value="8">8</button>
                <button type="button" onClick={update} value="7">7</button>
                <button type="button" onClick={update} value="/">/</button><br />
                <button type="button" onClick={update} value="6">6</button>
                <button type="button" onClick={update} value="5">5</button>
                <button type="button" onClick={update} value="4">4</button>
                <button type="button" onClick={update} value="*">*</button><br />
                <button type="button" onClick={update} value="3">3</button>
                <button type="button" onClick={update} value="2">2</button>
                <button type="button" onClick={update} value="1">1</button>
                <button type="button" onClick={update} value="+" >+</button><br />
                <button type="button" onClick={update} value="0">0</button>
                <button type="button" onClick={update} value=" - ">-</button>
                <button type="button" onClick={total} >=</button>

            </div>
        </>
    )
}

export default CalculatorwithState



// import CalculatorwithState from "./calculator/calculatorWithState"
// <CalculatorwithState />
