import React, { useState } from 'react';
import './App.css';
import { runeWordsById } from './constants/runeWords';
import { Runes } from './enums/Runes';
import { IRuneWord } from './interfaces';
import RuneCounter from './RuneCounter';
import RuneWords from './RuneWords';


function App() {
  const [selectedRunes, setSelectedRunes] = useState(new Set<Runes>());
  const runeWordMatchesByName: Set<IRuneWord> = new Set();

  // Find the runeword matches
  runeWordsById.forEach(runeWord => {
    runeWord.runes.forEach(rune => {
      if (selectedRunes.has(rune) && !runeWordMatchesByName.has(runeWord)) {
        runeWordMatchesByName.add(runeWord);
      }
    })
  })

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
        <RuneWords runeWordMatchesByName={runeWordMatchesByName} />
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
