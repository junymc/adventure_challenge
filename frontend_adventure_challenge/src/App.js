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
import { signup, login } from './actions/user'
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
        <NavBar />
        <Switch>
          <Route exact path="/adventures">
            <AdventuresContainer token={this.props.get_token} user={this.props.user}/>
          </Route>
          <Route path={`/adventures/:aid/evidence`}>
            <EvidenceContainer token={this.props.get_token} user={this.props.user}/>
          </Route>
          <Route path={`/adventures/:aid`}>
            <AdventureEvidence token={this.props.get_token} user={this.props.user}/>
          </Route>
          <Route path="/login">
            <LoginContainer token={this.props.get_token} loginUser={this.props.loginUser}/>
          </Route>
          <Route path="/signup">
            <SignupContainer token={this.props.get_token} signupUser={this.props.signupUser}/>
          </Route>
          <Route path="/welcome">
            <User token={this.props.get_token} user={this.props.user}/>
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/" >
            <Home />
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
    loginUser: (token, username, password) => dispatch(login(token, username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
