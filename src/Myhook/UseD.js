import React, { useContext } from "react"
import { fname, lname } from "./usecontext"

function UseD() {
    const fnames = useContext(fname)
    const lnames = useContext(lname)

    return (
        <>
            <h1>my name is {fnames} {lnames}</h1>
        </>
    )
}

export default UseD