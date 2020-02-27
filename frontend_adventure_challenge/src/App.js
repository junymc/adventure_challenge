import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import AdventuresContainer from './containers/AdventuresContainer'
import EvidenceContainer from './containers/EvidenceContainer'
import LoginForm from './components/users/LoginForm'
import SignupForm from './components/users/SignupForm'
import AdventureEvidence from './components/evidences/AdventureEvidence'
import Evidence from './components/evidences/Evidence'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
        
          <Route exact path="/adventures">
            <h1>Adventures List</h1>
            <AdventuresContainer />
          </Route>
          <Route path={`/adventures/:aid`} children={<AdventureEvidence />}>
            <AdventureEvidence />
          </Route>
          <Route path={`/adventures/:aid/evidence`}>
            <Evidence />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route exact path="/" >
            <h1 id="home">Welcome to </h1>
            <h1 id="home">Adventure Challenge</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
