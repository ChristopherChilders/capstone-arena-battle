import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../src/components/Login';
import Registration from '../src/components/Registration';
import LandingPage from './components/LandingPage';
import MainMenu from './components/MainMenu';
import { connect } from 'react-redux';


class protectedRoutes extends React.Component {
    render() {
    let paths = ["/login", "/registration", "/"]
    let currentPath = this.props.location.pathName
    let actualPath = false
    for(let i = 0; i < paths.length; i++){
        if(paths[i] === currentPath){
            actualPath = true
        }
    }
    if (actualPath){
        return (
        <div>
            <Route exact path="/" Component={LandingPage}/>
            <Route exact path="/login" Component={Login}/>
            <Route exact path="/registration" Component={Registration}/>
        </div>
        )
    } else {
        if(this.props.loggedIn === true){
            return (
                <div>
                    <Route exact path="/mainmenu" Component={MainMenu}/>
                </div>
            )
        } else {
            return(
                <Redirect to="/"/>
            )
        }
    }

    }
}
function mapStateToProps(state) {
    return {
        login:state.login
    }
}
export default connect(mapStateToProps)(protectedRoutes);