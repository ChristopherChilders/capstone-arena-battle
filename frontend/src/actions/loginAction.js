import axios from "axios";

export default (userData) =>{
    console.log(userData);
    
    const axiosPromise = axios({
        url : 'http://localhost:5152/login',
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