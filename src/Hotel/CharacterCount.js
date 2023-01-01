import React, { useState } from "react"

function CharacterCount() {
    const [count, setCount] = useState("")
    const [countdisplay, setCountdisplay] = useState(0)
    const characterCount = (e) => {
        const value = e.target.value
        setCount(value)
    }
    const [...counter] = count
    const displayCount = () => {
        setCountdisplay(count.length)
        const check = counter.reduce((pre, curr) => {
            if (!pre[curr]) {
                pre[curr] = 1
            } else {
                pre[curr] += 1
            }
            return pre
        }, {})
        console.log(check)
    }

    return (
        <>
            <input type="text" onChange={characterCount} />
            <button type="buton" onClick={displayCount} >COUNT</button>
            <h1>count:{countdisplay}</h1>

        </>
    )
}

export default CharacterCount