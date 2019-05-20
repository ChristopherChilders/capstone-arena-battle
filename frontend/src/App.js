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
import Navbar from './components/Navbar';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

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
      </div>
    )

  }
}

export default App;
