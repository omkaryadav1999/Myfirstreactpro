import React, { useState } from "react"
import "./App.css"
// hotel booking

//CSS enternal
const Mystyle = {
    width: "250px",
    padding: "5px",
    textAlign: "center"
}

function HotelBooking() {
    const [data, setData] = useState({})
    const [sedData, setSendData] = useState([])
    const [checkbox, setCheckBox] = useState(false)

    const SaveData = (e) => {
        const propName = e.target.name
        const value = e.target.value
        // insert data inside the object.
        setData({ ...data, [propName]: value })
    }

    const display = (e) => {
        e.preventDefault()

        // condition for fill all form
        if (data) {
            // insert the data in array for fecth
            setSendData([...sedData, data])
            // clean input box after submit
            setData("")
            // condition for check box
            if (data.check) {
                console.log(sedData)
            } else {
                alert("plase accept all term and condition")

            }
        } else {
            alert("plz fill the form")
        }


        setCheckBox(true)
    }

    return (
        <div id="container" style={{ width: "800px", margin: "auto", textAlign: "center", border: "1px solid black", borderRadius: "15px", borderCollapse: "collapse" }}>
            <h1>Book Your Hotel</h1>
            <form onSubmit={display}>
                <b>name:</b><input type="text" onChange={SaveData} name="name" placeholder="name" value={data.name || ""} /> &nbsp; &nbsp;
                <b>emil:</b><input type="email" onChange={SaveData} name="email" placeholder="email" value={data.email || ""} /> <br /><br />
                <b>Age:</b><input type="number" onChange={SaveData} name="age" placeholder="Age" value={data.age || ""} /> &nbsp; &nbsp;
                <b>mobile Number:</b><input type="text" onChange={SaveData} placeholder="mobile number" value={data.mobile_number || ""} name="mobile_number" /> <br /><br />
                <b>Location:</b><select style={Mystyle} onChange={SaveData} value={data.city || ""} name="city">
                    <option>select city</option>
                    <option>mumbai</option>
                    <option>pune</option>
                    <option>karad</option>
                    <option>satar</option>
                    <option>kolhapur</option>
                </select>&nbsp; &nbsp;
                <b>Hotel Name:</b><select style={Mystyle} onChange={SaveData} value={data.hotel || ""} name="hotel">
                    <option>select Hotel</option>
                    <option>hotel 5star</option>
                    <option>Hotel 4star</option>
                    <option>Hotel 3star</option>
                    <option>Hotel 2star</option>
                    <option>Hotel 1star</option>
                    <option>Hotel 0star</option>
                </select> <br /><br />
                <b> pin Code :</b><input type="text" onChange={SaveData} placeholder="pin code" value={data.pin_code || ""} name="pin_code" /> <br /><br />
                <input type="checkbox" onChange={SaveData} value={checkbox} name="check" /> plase select  term and condition.<br />
                <br />
                <button type="submit" className="btn">submit</button>
            </form><br /><br />
            <div>
                <table border={1} style={{ margin: "auto" }}>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>age</th>
                            <th>mobile_number</th>
                            <th>city</th>
                            <th>hotel</th>
                            <th>pin_code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sedData.map((value, i) =>
                            <tr key={i}>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.age}</td>
                                <td>{value.mobile_number}</td>
                                <td>{value.city}</td>
                                <td>{value.hotel}</td>
                                <td>{value.pin_code}</td>
                            </tr>
                        )}

                    </tbody>
                </table><br /><br />
            </div>
        </div>
    )
}

export default HotelBooking