import React, { useState, useEffect } from 'react'

const FecthWithasync = () => {
    const [user, setUser] = useState([])
    const [show, setShow] = useState(true)

    // if u use the async function for to fecth then you want to call it into the useEffect hooks for insted rendering.

    const getUser = async () => {
        try {
            setShow(false)
            const response = await fetch('https://api.github.com/users');
            setUser(await response.json())
        } catch (error) {
            setShow(false)
            console.log( error)
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <h2>List of GitHub Users</h2>
            {show ?
                <h1>loding...</h1>
                : <div className='container-fluid mt-5'>
                    <div className='row text-center' style={{ display: "flex", flexDirection: "row" }}>

                        {
                            user.map((currentEl) => {
                                const { avatar_url, id, login } = currentEl
                                return (


                                    <div className='col-10 col-md-4 mt-5' key={id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="imge"><img src={avatar_url} className="rounded" width="155" alt="img" /></div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{login}</h4><span className='textLeft'>{currentEl.type}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column"><span className="articles"></span><span className="number1">38</span>
                                                        </div>
                                                        <div className="d-flex flex-column"><span className="floowers"></span><span className="number2">980</span>
                                                        </div>
                                                        <div className="d-flex flex-column"><span className="rating"></span><span className="number3">8.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

            }
        </>
    )
}

export default FecthWithasync