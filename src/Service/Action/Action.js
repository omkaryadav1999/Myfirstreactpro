import { Add_TO_cart } from "../constants"

export const addtocart = (data) => {
    console.log(data)
    return {
        type: "Add_TO_cart",
        data: data
    }
}

// export const removetocart = (data) => {
//     return {
//         type: "Remove_TO_cart",
//         data: data
//     }
// }


// use this in index

// import { createStore } from "redux"
// import { Provider } from "react-redux"
// import rootReducer from "./Service/Reducers/index"
// const store = createStore(rootReducer)
// console.log(store)

// <Provider store={store}>
{/* <App /> */}
 // </Provider>


// use in the app

// import HomeContainer from "./containers/HomeContainer"
// import HeaderContainer from "./containers/HeaderContainer"

