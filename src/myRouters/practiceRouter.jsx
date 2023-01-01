import React from "react";
import { Link, useNavigate } from "react-router-dom"
function Practice() {
    const navigateFun = useNavigate()

    return (
        <div className="container">
            <h1>hello this is Practice</h1>
            <Link to="/Practice">PracticeRouter2</Link><br />
            <Link to="/PracticeRouter2">PracticeRouter3</Link>
            <br />
            <b>// UseParam</b>
            <li><Link to="/UseParam/omkar">omkar</Link></li>
            <li><Link to="/UseParam/rahul">rahul</Link></li>
            <br />

            <b> // useNavigate</b>
            <p>useNavigate are used to change the location of the component on the button.useNavigate return the function that lest you navigate program.</p>
            <br />
            <button type="button" onClick={() => navigateFun("/PracticeRouter2")} >PracticeRouter2</button><br /><br />
            <button type="button" onClick={() => navigateFun("/PracticeRouter3")} >PracticeRouter3</button>
        </div>
    )
}

export default Practice