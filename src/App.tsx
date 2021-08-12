import React, { useState } from 'react';
import './App.css';
import { runeWordsById } from './constants/runeWords';
import { RuneWordSort } from './enums/RuneWordSort';
import { IRuneWord, SelectedRune } from './interfaces';
import RuneCounter from './RuneCounter';
import RuneWords from './RuneWords';

interface IHaveRune {
  runeWord: IRuneWord;
  ratio: number;
}


function App() {
  const [selectedRunes, setSelectedRunes] = useState<SelectedRune>(new Map());
  let runeWordMatchesByName: Set<IRuneWord> = new Set();

  // Find the runeword matches
  if (selectedRunes.size) {
    runeWordsById.forEach(runeWord => {
      runeWord.runes.forEach(rune => {
        const runeCount = runeWord.runes.filter(r => r === rune).length;
        const numOfRune = selectedRunes.get(rune);
        if (numOfRune != null && numOfRune >= runeCount && !runeWordMatchesByName.has(runeWord)) {
          runeWordMatchesByName.add(runeWord);
        }
      });
    });

    runeWordMatchesByName = applyRuneWordSort();
  }

  function applyRuneWordSort(sort: RuneWordSort = RuneWordSort.HAVE_RUNES) {
    const o: IRuneWord[] = [];
    // Primary sort by how many runes you have, secondary sort by clevel
    if (sort === RuneWordSort.HAVE_RUNES) {
      const haveRunes: IHaveRune[] = [];

      for (const [runeWord] of runeWordMatchesByName.entries()) {
        const { runes } = runeWord;
        let haveRequiredRunes = 0;
        // check to see how much of each rune we have in the runeword
        runes.forEach(rune => {
          const neededOfRune = runes.filter(r => r === rune).length;
          const s = selectedRunes.get(rune);
          if (s != null && s / neededOfRune >= 1) {
            haveRequiredRunes++;
          }
        });

        const haveRatio = haveRequiredRunes / runes.length;
        const ratio: IHaveRune = {
          runeWord,
          ratio: haveRatio
        }

        haveRunes.push(ratio);
      }

      haveRunes.sort((a, b) => {
        const primary = b.ratio - a.ratio;
        return primary || b.runeWord.level - a.runeWord.level;
      }).forEach(hr => {
        o.push(hr.runeWord);
      });

      // console.log(haveRunes);
    }
    return new Set(o);
  }

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
        <RuneWords selectedRunes={selectedRunes} runeWordMatchesByName={runeWordMatchesByName} />
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
