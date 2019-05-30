import axios from "axios";

export default async (userData) =>{
    console.log("userDate", userData);
    
    const { data } = await axios({
        url : '/login',
        data : userData,
        method : "POST"
    })
    console.log("data", data);
    localStorage.setItem('login','true')
    return{
        type: "LOGIN_ACTION",
        payload : data
    }
}
