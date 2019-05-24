import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from './registrationReducer'
// import smaller reducers here

const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer
})

export default rootReducer;