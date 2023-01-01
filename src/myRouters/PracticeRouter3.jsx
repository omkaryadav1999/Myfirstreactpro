import React from "react";
import { Link } from "react-router-dom"
function PracticeRouter3() {
    return (
        <div className="container">
            <h1>hello i am practice Router3</h1>
            <h1>it is the last section</h1>
            <Link to="/Practice">Practice</Link><br />
            <Link to="/PracticeRouter2">PracticeRouter2</Link>
        </div>
    )
}

export default PracticeRouter3