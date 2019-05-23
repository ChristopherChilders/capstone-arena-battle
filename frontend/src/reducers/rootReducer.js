import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from './registrationReducer'
// import smaller reducers here

const rootReducer = combineReducers({
    registrationReducer,
    loginReducer
})

export default rootReducer;