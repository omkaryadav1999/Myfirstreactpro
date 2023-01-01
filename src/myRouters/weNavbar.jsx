import { Link, NavLink } from "react-router-dom"

function WebNavbar() {
    return (
        <>
            <ul className="NAV">
                <li><NavLink className="nav-bar-li" style={{ color: "red" }} to="/Practice">Practice</NavLink></li>
                <li><NavLink className="nav-bar-li" to="/PracticeRouter2">PracticeRouter2</NavLink></li>
                <li><NavLink className="nav-bar-li" to="/PracticeRouter3">PracticeRouter3</NavLink></li>
                <li><NavLink className="nav-bar-li" to="/UseSearchParam">UseSearchParam</NavLink></li>
            </ul>
        </>
    )
}

export default WebNavbar