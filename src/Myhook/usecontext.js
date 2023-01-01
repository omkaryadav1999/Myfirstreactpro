import React, { createContext } from "react"
import UseB from "./UseB"

const fname = createContext()
const lname = createContext()

function Usecontext() {
    return (
        <>
            <fname.Provider value={"omkar"}>
                <lname.Provider value={"yadav"}>
                    <UseB />
                </lname.Provider>
            </fname.Provider>
        </>
    )
}

export default Usecontext

export { fname, lname }

