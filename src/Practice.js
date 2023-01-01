import React, { memo, useMemo, useState } from "react";

// useMemo is similar to the useCllback they both are used to impore the performance of the application.useMemo retrurn the memorized value .


function Parent() {
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(true)

    const updateCount = () => {
        setCount(count + 1)

    }

    const checkFun = (count) => {
        console.log("checkFun")
        for (let i = 0; i < 100000; i++) {

        }
        return count
    }

    const value = useMemo(() => {
        return checkFun(count)
    }, [count])
    return (
        <>
            <h1>count:{value}</h1>
            <button onClick={updateCount}>countUpdate</button>
            <button onClick={() => setBool(!bool)}>updatebool</button>
        </>
    )
}

export default Parent