import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import AdventuresContainer from './containers/AdventuresContainer'
import EvidenceContainer from './containers/EvidenceContainer'
import AdventureEvidence from './components/evidences/AdventureEvidence'
import Home from './components/Home'
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import User from './components/users/User'
import Logout from './components/Logout'
import { getToken } from './actions/auth'
import { signup, login, logout } from './actions/user'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.get_token()
    console.log(this.props)
  }

render() {
  return (
    <Router>
      <div className="App">
        <NavBar user={this.props.user}/>
        <Switch>
          <Route exact path="/adventures">
            <AdventuresContainer token={this.props.token} user={this.props.user}/>
          </Route>
          <Route path={`/adventures/:aid/evidence`}>
            <EvidenceContainer token={this.props.token} user={this.props.user}/>
          </Route>
          <Route path={`/adventures/:aid`}>
            <AdventureEvidence token={this.props.token} user={this.props.user}/>
          </Route>
          <Route path="/login">
            <LoginContainer token={this.props.token} loginUser={this.props.loginUser} user={this.props.user}/>
          </Route>
          <Route path="/signup">
            <SignupContainer token={this.props.token} signupUser={this.props.signupUser} user={this.props.user}/>
          </Route>
          <Route path="/welcome">
            <User token={this.props.token} user={this.props.user}/>
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/" >
            <Home token={this.props.token} logoutUser={this.props.logoutUser} user={this.props.user}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
 }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    token: state.csrf_token,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
    get_token: () => dispatch(getToken()),
    signupUser: (token, username, password) => dispatch(signup(token, username, password)),
    loginUser: (token, username, password) => dispatch(login(token, username, password)),
    logoutUser: token => dispatch(logout(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
