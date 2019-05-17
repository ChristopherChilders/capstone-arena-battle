import React from 'react';
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
            <div className="login">
                <h1 className="login-title">Login</h1>
            <form onSubmit={this.handleSubmit}>
            <label>Email</label>
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
                <button 
                type="submit"
                onSubmit={this.handleSubmit}
                disabled={!this.validateForm}
                >
                Submit
                </button>
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