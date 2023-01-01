import React, { useEffect, useState } from "react"

function UseEffect() {
    const [width, setWidth] = useState(window.screen.width)

    const update = () => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", update)

        return () => window.removeEventListener("resize", update)
    })

    return (
        <>
            <h1>{width}</h1>
        </>
    )
}

export default UseEffect