import React from 'react';
import './App.css';

import AdventuresContainer from './containers/AdventuresContainer'
import EvidencesContainer from './containers/EvidencesContainer'

function App() {
  return (
    <div className="App">
       <AdventuresContainer />
       <EvidencesContainer />
    </div>
  );
}

export default App;
