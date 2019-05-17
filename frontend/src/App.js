import React from 'react';

import './App.css';
import Background from './components/Background';
import Login from './components/Login';
// import './App.css';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <Link to="/login">Login</Link>
        <Route path="/login" component={Login}/>
        <Background />
      </div>
    )

  }
}

export default App;
