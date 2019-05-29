import axios from "axios";

export default (userData) =>{
    console.log("userData", userData);
    
    const {data} = axios({
        url : '/registration',
        method : "POST",
        data : userData
    })
    console.log("data", data)
    return{
        type: "REGISTRATION-ACTION",
        payload : data
    }
}