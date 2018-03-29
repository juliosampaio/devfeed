import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Login } from '../Login'
import { SignUp } from '../SignUp'
import { Home } from '../Home'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
    );
  }
}

export default App;
