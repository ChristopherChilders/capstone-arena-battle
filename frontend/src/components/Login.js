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
            
            </form>
            </div>
        )
    }
}

export default Login;