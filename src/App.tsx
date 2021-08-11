import React from 'react';
import './App.css';
import RuneCounter from './RuneCounter';
import RuneWords from './RuneWords';

function App() {
  return (
    <div className="App">
      <header className="Header">
        Runeword Calculator
      </header>
      <div className="Panes">
        <RuneCounter />
        <RuneWords />
      </div>
    </div>
  );
}

export default App;
