import React, { forwardRef } from "react"

//what is the  forwardRef: with the help of forwardRef we can pass the ref from parent component to child component.
function Child(props, ref) {
    return (
        <>
            <input type="tex" ref={ref} />
        </>
    )
}
export default forwardRef(Child)