import {combineReducers} from "redux";
import InputReducer from "./InputReducer";
import BodyReducer from "./BodyReducer";

export default combineReducers({
    input : InputReducer,
    body : BodyReducer
})