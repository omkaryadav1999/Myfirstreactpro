import React from "react"

function Header(prop) {
    return (
        <div>
            <div style={{ textAlign: "right" }}>
                <span className="pointer">{prop.data.length}</span>
                <img src="https://cdn.pixabay.com/photo/2021/09/13/22/02/add-6622547__340.png" width="80px" alt="" />
            </div>

        </div>
    )
}

export default Header
