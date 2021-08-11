import React, { useState } from 'react';
import './App.css';
import { runeWordsById } from './constants/runeWords';
import { IRuneWord, SelectedRune } from './interfaces';
import RuneCounter from './RuneCounter';
import RuneWords from './RuneWords';


function App() {
  const [selectedRunes, setSelectedRunes] = useState<SelectedRune>(new Map());
  const runeWordMatchesByName: Set<IRuneWord> = new Set();

  // Find the runeword matches
  runeWordsById.forEach(runeWord => {
    runeWord.runes.forEach(rune => {
      const runeCount = runeWord.runes.filter(r => r === rune).length;
      const numOfRune = selectedRunes.get(rune);
      if (numOfRune != null && numOfRune >= runeCount && !runeWordMatchesByName.has(runeWord)) {
        runeWordMatchesByName.add(runeWord);
      }
    })
  })

  function reset() {
    setSelectedRunes(new Map());
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
