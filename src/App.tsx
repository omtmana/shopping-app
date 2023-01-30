import React from 'react';
import './App.css';

import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Greeter person="Colt" />
      <Greeter person="Blue"/>
      <Greeter person="Elton"/>
    </div>
  );
}

export default App;
