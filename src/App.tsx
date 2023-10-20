import React from 'react';
import logo from './logo.svg';
import './App.css';

import Integrations from "./components/Integrations";
import IntegrationsList from "./data/IntegrationsList";

function App() {
  return (
    <div className="App">
      <Integrations members={IntegrationsList} />
    </div>
  );
}

export default App;
