import React from "react";
import { Link } from "react-router-dom"
function PracticeRouter2() {
    return (
        <div className="container">
            <h1>hello i am practice second page</h1>
            <Link to="/Practice">Practice</Link><br />
            <Link to="/PracticeRouter2">PracticeRouter3</Link>
        </div>
    )
}

export default PracticeRouter2