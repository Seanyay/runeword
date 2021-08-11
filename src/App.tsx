import React, { useState } from 'react';
import './App.css';
import { Runes } from './enums/Runes';
import RuneCounter from './RuneCounter';
import RuneWords from './RuneWords';


function App() {
  const [selectedRunes, setSelectedRunes] = useState(new Set<Runes>());

  function reset() {
    setSelectedRunes(new Set());
  }
  
  return (
    <div className="App">
      <header className="Header">
        Runeword Calculator
      </header>
      <div className="Panes">
        <RuneCounter selectedRunes={selectedRunes} setSelectedRunes={setSelectedRunes} />
        <RuneWords />
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
