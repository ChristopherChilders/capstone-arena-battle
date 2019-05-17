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
            <form onSubmit={this.handleSubmit}>
            <label>Email</label>
                <input 
                type="email"
                value={this.state.email}
                onChange={this.handleChange}/>
                <label>Password</label>
                <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}/>
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
}

export default Login;