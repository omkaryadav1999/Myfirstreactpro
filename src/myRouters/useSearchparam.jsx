import React from "react";
import { useSearchParams } from "react-router-dom"
// useSearchParam are used for to read and modifiy the query stign in the url for the current location.

// useSearchParam return the two value serach ,second is the function which is modify the serach

function UseSearchParam() {
    const [searchparam, setSearchparam] = useSearchParams()
    const age = searchparam.get("age")
    const name = searchparam.get("name")
    return (
        <>
            <div className="container">
                <h1>welcome to useSearchParam</h1>
                <h1>name:{name}</h1>
                <h1>my age is :{age}</h1>
                   <br/>
                {/* use the setSearchparam */}
                 // useSearchParam by useing setSearchparam <br/>
                <button type="button" onClick={() => setSearchparam({ age: 26, name: "neha" })}>sbmit</button>
            </div>
        </>
    )

}

export default UseSearchParam