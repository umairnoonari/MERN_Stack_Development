import { combineReducers } from "redux";
import ChangeTheNumber from "./ChangetheNumber";
import APIReducer from "./APIReducer";
const RootReducers=combineReducers({
    ChangeTheNumber,
    APIReducer
})
export default RootReducers