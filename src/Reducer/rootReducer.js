import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    game:gameReducer
})

export default rootReducer