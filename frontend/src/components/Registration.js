import React from 'react';
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
                onSubmit={this.handleSubmit}>
                    <div className={style.registrationForm}>
                    <label className={style.registrationLabel}>Username</label>
                        <input 
                            type="text"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={this.state.userName}/>
                    <label className={style.registrationLabel}>Password</label>
                        <input 
                            type="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            value={this.state.password}/>
                    <label className={style.registrationLabel}>Email</label>
                        <input 
                            type="email"
                            placeholder="Email"
                            onChange={this.onChange}
                            value={this.state.email}/>
                </div>
                </form>
            </div>
        )
    }
    onChange(e) {
        this.setState({
            userName:e.target.value,
            email: e.target.value,
            password: e.target.value,
            // createdAt:''
        })
    }
    onSubmit(){

    }
}

export default Registration;