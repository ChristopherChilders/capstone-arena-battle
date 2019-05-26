import React from 'react';
// import style from '../App.module.css';

// import Background from './components/Background';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
import {
  Switch,
  Route
} from 'react-router-dom'
import MainMenu from './components/MainMenu';

class App extends React.Component{
  render() {
    return(
      <div >
        <Route>
          <div>
            <Switch>
              <Route exactly component={Login} path="/login"/>
              <Route exactly component={Registration} path="/registration"/>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/MainMenu" component={MainMenu}/>
              <Route exact path="/game" component={GamePage} />

            </Switch>
          </div>
        </Route>
      </div>
    )

  }
}

export default App;
