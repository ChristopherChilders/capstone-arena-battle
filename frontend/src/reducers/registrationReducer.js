export default(state = [], action={type:''}) => {
    // console.log(action);
    
    if (action.type === "REGISTRATION_ACTION" ){ 
        console.log(action.payload);
        return action.payload.data
        } else {
            return state;
        }
    }