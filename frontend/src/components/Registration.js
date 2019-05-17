import React from 'react';
import style from '../Registration.module.css';
class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            password:'',
            createdAt: null
        }
    }
    render() {
        return (
            <div className={style.registrationForm}>
                <div className={style.registrationTitle}>Registration</div>
            </div>
        )
    }
}

export default Registration;