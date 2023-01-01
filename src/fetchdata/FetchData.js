import React, { useEffect, useState } from "react"

// fecth data with delete functionality.

function FetchData() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((value) => { return value.json() })
            .then((value) => { setData(value) })
    }, [])
    const DeleteFun = (i) => {
        setData(data.filter((value, index) => {
            return i !== index
        }))
        console.log(data)
    }
    return (

        <div id="dataTable">
            <table border={1} style={{ textAlign: "center" }} >
                <thead>
                    <tr >
                        <th>userId</th>
                        <th>title</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, i) => {
                        return <tr key={value.id} >
                            <td>{value.userId}</td>
                            <td>{value.title}</td>
                            <td><button type="button" onClick={() => DeleteFun(i)}>Delete</button></td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default FetchData