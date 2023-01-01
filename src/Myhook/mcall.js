import React, { memo } from "react"


function Child({ value, fun }) {
    console.log("child")
    return (
        <>
            {value.map((value, index) => { return <p key={index}>{value + index}</p> }
            )}
            <button type="button" onClick={fun}>click de</button>
        </>
    )

}
export default memo(Child)