import axios from 'axios';

export default playerOneAction(characterData) => {
    const axiosPromise = axios({
        // consult how to pull data from backend
            method: 'get',
            url: '/login',
            data: characterData
    })
    return{
        type: "PLAYERONE_ACTION",
        payload: axiosPromise
    }
}
