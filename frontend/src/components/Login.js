import React from 'react';
import style from '../StyleSheets/Login.module.css'
import Axios from 'axios';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: 'player@one.com',
            password: 'password'
        }
    }
    render() {
        return (
            <div className={style.login}>
                <h1 className={style.loginTitle}>Login</h1>
            <form 
            action="/login"
            method="POST"
            onSubmit={this.handleSubmit}>
            <label>Email</label>
            <div className={style.loginInputs}>
                <input 
                type="email"
                placeholder="email"
                value={this.state.email}
                id="email"
                onChange={this.handleChange}/>
                <label>Password</label>
                <input
                type="password"
                placeholder="password"
                value={this.state.password}
                id="password"
                onChange={this.handleChange}/>
                <div className={style.submitButton}>
                <button 
                type="submit"
                onSubmit={this.handleSubmit}
                >
                Submit
                </button>
                </div>
            </div>
            </form>
            </div>
        )
    }

    handleChange = (e) => {
        console.log("handleChange", e.target.value)
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]:e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/login' , {
            email: this.state.email,
            password:this.state.password
        })
        console.log("handleSubmit", this.state.email, this.state.password);
        
    }
}

export default Login;