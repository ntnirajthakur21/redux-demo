import { combineReducers } from "redux";
import CartReducer from './cartReducer'
import itemReducer from './itemReducer'

const RootReducer = combineReducers({
    cart:CartReducer,
    items:itemReducer
})

export default RootReducer