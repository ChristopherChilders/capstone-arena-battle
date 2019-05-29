import React from 'react';
import style from '../StyleSheets/Registration.module.css';
import NavBar from '../components/Navbar';
import registrationAction from '../actions/registrationAction';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'test11',
            email: 'test@test.com',
            password:'test',
        }
    }
    render() {
        if(this.props.id){
            return(
                <div>
                    <Redirect to='/login'/>
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar/>
                    <div className={style.registrationTitle}>
                        <h1>Registration</h1>
                    </div>
                    <form 
                    onSubmit={this.handleSubmit}>
                        <div className={style.registrationForm}>
                        <label className={style.registrationLabel}>Username</label>
                            <input 
                                id="username"
                                type="text"
                                placeholder="Username"
                                onChange={this.onChange}
                                value={this.state.username}/>
                                <label className={style.registrationLabel}>Email</label>
                            <input 
                                id="email"
                                type="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                value={this.state.email}/>
                        <label className={style.registrationLabel}>Password</label>
                            <input 
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.onChange}
                                value={this.state.password}/>
                        
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
        this.props.registrationAction({
            email:this.state.email,
            password: this.state.password,
            username: this.state.username
        })
        return this.state.id
    }
}

function mapStateToProps(state){
    return{
        register: state.register
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registrationAction: registrationAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);