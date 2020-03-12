import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import AdventuresContainer from './containers/AdventuresContainer'
import EvidenceContainer from './containers/EvidenceContainer'
import AdventureEvidence from './components/evidences/AdventureEvidence'
import Home from './components/Home'
import LoginContainer from './containers/LoginContainer'
import SignupContainer from './containers/SignupContainer'
import User from './components/users/User'
import Logout from './components/Logout'
import { getToken } from './actions/auth'
import { signup, login, logout, setCurrentUser } from './actions/user'
import { connect } from 'react-redux'
import UserContainer from './containers/UserContainer'

class App extends React.Component {

componentDidMount() {
    this.props.get_token()
    this.props.setCurrentUser()
  }  

render() {
  return (
    <Router>
      <div className="App">
        <NavBar user={this.props.user}/>
        <Switch>
          <Route exact path="/adventures">
            <AdventuresContainer 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            user={this.props.user}/>
          </Route>
          <Route path={`/adventures/:aid/evidence`}>
            <EvidenceContainer 
            token={this.props.token}
            setCurrentUser={this.props.setCurrentUser} 
            user={this.props.user}/>
          </Route>
          <Route path={`/adventures/:aid`}>
            <AdventureEvidence 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            user={this.props.user}/>
          </Route>
          <Route path="/login">
            <LoginContainer 
            get_token={this.props.get_token} 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            loginUser={this.props.loginUser} 
            user={this.props.user}/>
          </Route>
          <Route path="/signup">
            <SignupContainer 
            get_token={this.props.get_token} 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            signupUser={this.props.signupUser} 
            user={this.props.user}/>
          </Route>
          <Route path="/welcome">
            <User 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            user={this.props.user}/>
          </Route>
          <Route path="/userpage">
            <UserContainer 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            user={this.props.user}/>
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/" >
            <Home 
            get_token={this.props.get_token} 
            token={this.props.token} 
            setCurrentUser={this.props.setCurrentUser}
            logoutUser={this.props.logoutUser} 
            user={this.props.user}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
 }
}

const mapStateToProps = state => {
  return {
    token: state.csrf_token,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
    get_token: () => dispatch(getToken()),
    signupUser: (token, username, password) => dispatch(signup(token, username, password)),
    loginUser: (token, username, password) => dispatch(login(token, username, password)),
    logoutUser: token => dispatch(logout(token)),
    setCurrentUser: () => dispatch(setCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
