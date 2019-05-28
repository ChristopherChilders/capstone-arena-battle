import axios from "axios";

export default (userData) =>{
    console.log(userData);
    
    const axiosPromise = axios({
        url : '/login',
        method : "POST",
        data : userData
    })
    .then(function (response) {
        console.log(response)
    })
    return{
        type: "LOGIN_ACTION",
        payload : axiosPromise
    }
}