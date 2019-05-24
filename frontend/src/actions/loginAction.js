
import axios from "axios";

export default (userData) =>{
    const axiosPromise = axios({
        url : `${window.apihost}/login`,
        method : "POST",
        data : userData
    })
    return{
        type: "LOGIN_ACTION",
        payload : axiosPromise
    }
}