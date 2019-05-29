import React from 'react';
// import style from '../App.module.css';
import {connect} from 'react-redux';
import Background from './components/Background';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';

import {
  Route
} from 'react-router-dom'
import MainMenu from './components/MainMenu';

class App extends React.Component{
  render() {
      if(this.props.login) {
        return(
          <div >
            <Route exactly component={Login} path="/login"/>
                  <Route exact path="/mainmenu" component={MainMenu}/>
                  <Route exact path="/game" component={GamePage} />
                  <Route exact component={Registration} path="/registration"/>
                  <Background />
          </div>
        )} else {
          return(
            <div>
              <Route exact component={Login} path="/login"/>
              <Route exact path="/" component={LandingPage}/>
              <Route exact component={Registration} path="/registration"/>
            // <Background />
            </div>
          )
        }
      } 
  }


function mapStateToProps(state){
  return{
      login: state.login
  }
}
export default connect(mapStateToProps, null)(App);
