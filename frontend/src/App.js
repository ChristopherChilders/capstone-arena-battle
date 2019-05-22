import React from 'react';
// import style from '../App.module.css';

import Background from './components/Background';
import Login from './components/Login';
import Registration from './components/Registration';
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

  async componentDidMount(){
    const url = 'ws://localhost:5152/login';
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
            </Switch>
          </div>
        </Route> 
        <Background />
        <Route path="/MainMenu" component={MainMenu}/>
      </div>
    )

  }
}

export default App;
