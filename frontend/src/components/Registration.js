import React from 'react';
import Axios from 'axios';
import style from '../StyleSheets/Registration.module.css';
class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            password:'',
            // createdAt: null
        }
    }
    render() {
        return (
            <div>
                <div className={style.registrationTitle}>
                    <h1>Registration</h1>
                </div>
                <form 
                action="/registration"
                method="POST"
                onSubmit={this.handleSubmit}>
                    <div className={style.registrationForm}>
                    <label className={style.registrationLabel}>Username</label>
                        <input 
                            id="userName"
                            type="text"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={this.state.userName}/>
                    <label className={style.registrationLabel}>Password</label>
                        <input 
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            value={this.state.password}/>
                    <label className={style.registrationLabel}>Email</label>
                        <input 
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            value={this.state.email}/>
                            <div className={style.submitButton}>
                                <button
                                    type="submit"
                                    onSubmit={this.handleSubmit}>
                                    Submit
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
    onChange = (e) => {
        console.log("handleChange", e.target.value);
        
        this.setState({
            [e.target.id]:e.target.value,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
            // createdAt:''
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/login' , {
            email: this.state.email,
            password:this.state.password,
            userName: this.state.userName
        })
        console.log("handleSubmit", 
        "email", this.state.email,
        "password", this.state.password,
        "username", this.state.userName);
    }
}

export default Registration;