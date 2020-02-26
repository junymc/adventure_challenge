import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import AdventuresContainer from './containers/AdventuresContainer'
import EvidenceContainer from './containers/EvidenceContainer'
import Adventure from './components/adventures/Adventure'
import LoginForm from './components/users/LoginForm'
import SignupForm from './components/users/SignupForm'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
        <Route path="/" exact>
            <h1>Welcome to Adventure Challenge</h1>
          </Route>
          <Route path="/adventures">
            <h1>Adventures List</h1>
            <AdventuresContainer />
          </Route>
          <Route path={`/adventures/:id`}>
            <AdventuresContainer />
          </Route>
          {/* <Route path="adventures/`${adventureId}`/evidence">
            <EvidenceContainer />
          </Route> */}
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="signup">
            <SignupForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
