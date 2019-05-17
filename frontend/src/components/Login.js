import React from 'react';
import style from '../Login.module.css'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div className={style.login}>
                <h1 className={style.loginTitle}>Login</h1>
            <form onSubmit={this.handleSubmit}>
            <label>Email</label>
            <div className={style.loginInputs}>
                <input 
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}/>
                <label>Password</label>
                <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}/>
                <div className={style.submitButton}>
                <button 
                type="submit"
                onSubmit={this.handleSubmit}
                disabled={!this.validateForm}
                >
                Submit
                </button>
                </div>
            </div>
            </form>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log("handleChange", e.target.value)
    }
    handleSubmit(e){
        e.preventDefault()
    }
    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }
}

export default Login;