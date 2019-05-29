export default(state = false, action={type:''}) => {
    // console.log(action);
    
    if (action.type === "LOGIN_ACTION"){ 
        console.log(action.payload);
        // let isValidId = false;
        if(action.payload.id){
            return true
        }

    } else if (action.type === "REGISTRATION_ACTION"){
        console.log("registration-action");
        
        return true
    } else if (action.type === "LOGOUT_ACTION") {
        return false
    } else {
        return state
    }
}