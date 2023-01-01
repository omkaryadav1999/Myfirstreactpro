import React from "react"
import { useParams } from "react-router-dom"
// when we are getting the data from the backhed in the form of api and we awant to show it in the base of id in the url .

function UseParam() {
    const data = useParams()
    const { name } = data
    return (
        <>
            <div className="container">
                <h1>welcome to useParams page</h1>
                <h1>my name is {name} </h1>
            </div>
        </>
    )

}

export default UseParam