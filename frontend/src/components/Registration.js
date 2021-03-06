import React from 'react';
import style from '../StyleSheets/Registration.module.css';
import NavBar from '../components/Navbar';
import registrationAction from '../actions/registrationAction';
import Embroider from '../Images/TitleEmbroider.png'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password:'',
        }
    }
    render() {
        if(this.props.register){
            
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
                                <img src={Embroider} alt=''></img>
                        </div>
                    </form>
                </div>
            )
        }
    }
    onChange = (e) => {
        
        this.setState({
            [e.target.id]:e.target.value,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.registrationAction({
            email:this.state.email,
            password: this.state.password,
            username: this.state.username
        })

    }
}

function mapStateToProps(state){
    return{
        register: state.login
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registrationAction: registrationAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);