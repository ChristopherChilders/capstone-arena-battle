import React from 'react';

// import './App.css';
import Background from './components/Background';
import Login from './components/Login';
import Registration from './components/Registration';
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
        <Link to="/registration">Registration</Link>
        <Route path="/registration" component={Registration}/>
        <Background />
      </div>
    )

  }
}

export default App;
