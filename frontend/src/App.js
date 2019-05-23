import React from 'react';
// import style from '../App.module.css';

import Background from './components/Background';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import MainMenu from './components/MainMenu';
import Navbar from './components/Navbar';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.socket = [];
    this.state = {
    
    }
  }

  componentDidMount(){
    const url = 'ws://localhost:4346/login';
    this.connection = new WebSocket(url);

    this.connection.onlogin = (e) => {
      const email = JSON.parse(e.data);
      this.setState({
        email
      });
    }
  }

  render() {
    return(
      <div >
        <Route>
          <div>
            <Navbar/>
            <Switch>
              <Route exactly component={Login} path="/login"/>
              <Route exactly component={Registration} path="/registration"/>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/MainMenu" component={MainMenu}/>
            </Switch>
          </div>
        </Route>
        {/* <Background /> */}
      </div>
    )

  }
}

export default App;
