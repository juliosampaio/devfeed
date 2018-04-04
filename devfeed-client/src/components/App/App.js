import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { Login } from '../Login'
import { SignUp } from '../SignUp'
import { Home } from '../Home'
import { getToken } from '../../utils'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getToken() !== null
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  render() {
    return (
        <Switch>
          <ProtectedRoute exact path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
    );
  }
}

export default App;
