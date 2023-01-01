import { Add_TO_cart } from "../constants"

const initialState = {
    cardData: []
}

export default function cardItem(state = [], action) {
    switch (action.type) {
        case Add_TO_cart:
            console.log("Reducers", action)
            return [
                ...state,
                { cardData: action.data }
            ]
        default:
            return state
    }
}