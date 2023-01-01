import React, {useMemo, useState } from "react"

function Usememo() {
    const [count, setCount] = useState(0)
    const [increase, setIncrease] = useState()

    const update = () => {
        setCount(count + 1)
    }
    const increasement = () => {
        setIncrease(increase + 1)
    }
    const isEven = useMemo(() => {
        console.log("hello")
        let i = 0
        while (i < 2000000000) i++;
        return count % 2 === 0
    }, [count])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={update}>updateclick</button>
            <span>{isEven ? "even" : "odd"}</span>
            <button onClick={increasement}>increase</button>
        </>
    )

}

export default Usememo