import React, { useRef, useState, useEffect } from "react"


/* useRef is allow us to modifie the dom , react is tell us that don't modifie the dom directly.
 but with the help of useRef we can directly modifie the dom,but use this hook as much less . */
// WE CAN ALSO STORE THE PREVEOUS VALUE OF THE CURRENT ELEMENT

function UseRef() {
    const [current, setCurrent] = useState(0)
    const [name, setName] = useState("")
    const preve = useRef(0)
    const myname = useRef("")

    useEffect(() => {
        preve.current = current
    }, [current, preve])

    useEffect(() => {
        myname.current = name
    }, [name])
    return (
        <>
            <h1>count:{current}</h1>
            <h1>previous value:{preve.current}</h1>
            <h1>name:{name}</h1>
            <h1>name:{myname.current}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <button type="button" onClick={() => setCurrent(current + 1)}>update</button>
        </>
    )
}
export default UseRef