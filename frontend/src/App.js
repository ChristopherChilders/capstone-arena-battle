import React from 'react';
// import style from '../App.module.css';

import Background from './components/Background';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
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
    this.state = {
      // email: '',
      // password: ''

    }
  }

  componentDidMount(){
    const url = `ws://localhost:4000/ws`; 
    this.connection = new WebSocket(url);

    this.connection.onmessage = (e) => {
      console.log(e);
      console.log(e.data);
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  render() {
    return(
      <div >
        <Route>
          <div>
            {/* <Navbar/> */}
            <Switch>
              <Route exactly component={Login} path="/login"/>
              <Route exactly component={Registration} path="/registration"/>
              <Route exact path="/MainMenu" component={MainMenu}/>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/game" component={GamePage} />
            </Switch>
          </div>
        </Route>
        {/* <Background /> */}
      </div>
    )

  }
  // _login = async () => {
  //   this.connection.send(JSON.stringify({
  //     email,
  //     password
  //   }))
  // }
}

export default App;
