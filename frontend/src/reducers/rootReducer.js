import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from './registrationReducer'


const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer
})


export default rootReducer;