import React, { useEffect, useReducer, useRef } from "react";


// watch.js
// function Watch() {
//     const [watch, setWatch] = useState(new Date().toLocaleTimeString())

//     useEffect(() => {
//         setTimeout(() => {
//             let timer = new Date().toLocaleTimeString()
//             setWatch(timer)
//         }, 1000)
//     })

//     return (
//         <>
//             <div style={{ width: "500px", height: "200px", margin: "150px auto", textAlign: "center", fontSize: "bold" }}>
//                 <h1>watch</h1>
//                 <div style={{ width: "400px", textAlign: "center", backgroundColor: "black", color: "aqua", margin: " auto" }}>
//                     <h1 style={{ lineHeight: "100px" }}>{watch}</h1>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Watch



// // stop watch
// const initialState = {
//     isRunning: false,
//     time: 0
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case 'start':
//             return { ...state, isRunning: true };
//         case 'stop':
//             return { ...state, isRunning: false };
//         case 'reset':
//             return { isRunning: false, time: 0 };
//         case 'tick':
//             return { ...state, time: state.time + 1 };
//         default:
//             throw new Error();
//     }
// }


// function StopWatch() {
//     const [state, Dispatch] = useReducer(reducer, initialState)
//     const isref = useRef(0)
//     useEffect(() => {
//         if (!state.isRunning) {
//             return;
//         }
//         isref.current = setInterval(() => Dispatch({ type: "tick" }), 1000);

//         return () => {
//             clearInterval(isref.current);
//             isref.current = 0
//         }
//     }, [state.isRunning])
//     return (
//         <>

//             <h1>{state.time}</h1>
//             <button type="button" onClick={() => Dispatch({ type: "start" })}>start</button> &nbsp;
//             <button type="button" onClick={() => Dispatch({ type: "stop" })}>stop</button>  &nbsp;
//             <button type="button" onClick={() => Dispatch({ type: "reset" })}>reset</button>
//         </>
//     )

// }

// export default StopWatch