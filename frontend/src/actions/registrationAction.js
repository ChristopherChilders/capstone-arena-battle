import axios from "axios";

export default async (userData) =>{
    
    const {data} = await axios({
        url : '/registration',
        method : "POST",
        data : userData
    })
    // console.log("data", userData)
    return{
        type: "REGISTRATION_ACTION",
        payload : data
    }
}