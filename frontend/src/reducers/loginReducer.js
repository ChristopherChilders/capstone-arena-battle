export default(state = false, action={type:''}) => {
    // console.log(action);
    
    if (action.type === "LOGIN_ACTION" ){ 
        console.log(action.payload);
        let isValidId = false;
        if(action.payload.id){
            isValidId=true
        }
        return isValidId
    } else if (action.type === "LOGOUT_ACTION") {
        return false
    } else {
        return state
    }
}