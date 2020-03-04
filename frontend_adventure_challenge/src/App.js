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
// import Evidence from './components/evidences/Evidence'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/adventures">
            <AdventuresContainer />
          </Route>
          <Route path={`/adventures/:aid/evidence`}>
            <EvidenceContainer />
          </Route>
          <Route path={`/adventures/:aid`}>
            <AdventureEvidence />
          </Route>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/signup">
            <SignupContainer />
          </Route>
          <Route path="/welcome">
            <User />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
