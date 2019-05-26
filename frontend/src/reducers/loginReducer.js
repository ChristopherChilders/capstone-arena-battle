export default(state = [], action={type:''}) => {
    console.log(action);
    
    if (action.type === "LOGIN_ACTION" ){ 
        console.log(action.payload);
        return action.payload.data
    } else if (action.type === "LOGOUT_ACTION") {
        return []
    } else {
        return state
    }
}