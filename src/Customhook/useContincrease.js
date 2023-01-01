import { useEffect } from "react"

function useContincrease(count) {
    useEffect(() => {
        document.title = `chact(${count})`
    }, [count])
}

export default useContincrease