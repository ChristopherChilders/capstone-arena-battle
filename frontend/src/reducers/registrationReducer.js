export default(state = false, action={type:''}) => {
    
    if (action.type === "REGISTRATION_ACTION" ){ 
        let hasValidId = false;
        if(hasValidId){
            hasValidId = true
        }
        return hasValidId
        } else {
            return false
    }
}