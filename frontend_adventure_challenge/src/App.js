import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import AdventuresContainer from './containers/AdventuresContainer'
import EvidenceContainer from './containers/EvidenceContainer'
import Adventure from './components/adventures/Adventure'
import LoginForm from './components/users/LoginForm'
import SignupForm from './components/users/SignupForm'
import EvidenceInput from './components/evidences/EvidenceInput';
import AdventureEvidence from './components/evidences/AdventureEvidence'

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
          <Route path={`/adventures/:aid`} children={<EvidenceInput />}>
            <AdventureEvidence />
          </Route>
          {/* <Route path="adventures/`${adventureId}`/evidence">
            <EvidenceContainer />
          </Route> */}
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
