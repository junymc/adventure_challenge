import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import AdventuresContainer from './containers/AdventuresContainer'
import EvidencesContainer from './containers/EvidencesContainer'
import Adventure from './components/adventures/Adventure'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <h1>Adventures List</h1>
            <AdventuresContainer />
          </Route>
          {/* <Route path="/adventure/`${adventure.id}`">
            <Adventure />
          </Route> */}
          {/* <Route path="adventure/`${adventure.id}`/evidence">
            <EvidencesContainer />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
