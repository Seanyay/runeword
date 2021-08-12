import React, { useState } from 'react';
import './App.css';
import { runeWordsById } from './constants/runeWords';
import { Runes } from './enums/Runes';
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
  const [highlightedRunes, setHighlightedRunes] = useState<Set<Runes>>(new Set());

  let runeWordMatchesByName: Set<IRuneWord> = new Set();

  // Find the runeword matches
  if (selectedRunes.size) {
    runeWordsById.forEach(runeWord => {
      runeWord.runes.forEach(rune => {
        const numOfRune = selectedRunes.get(rune);
        if (numOfRune != null && numOfRune && !runeWordMatchesByName.has(runeWord)) {
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
          if (s != null && s / neededOfRune > 0) {
            const ratio = s / neededOfRune;
            haveRequiredRunes = haveRequiredRunes + (ratio < 1 ? ratio : 1);
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

    }
    return new Set(o);
  }

  function setHighlightedRune(rune: Runes, remove: boolean = false) {
    const newHighlightedRunes = new Set(highlightedRunes);
    if (remove) {
      newHighlightedRunes.delete(rune);
    }
    else {
      newHighlightedRunes.add(rune);
    }
    setHighlightedRunes(newHighlightedRunes);
  }

  
  return (
    <div className="App">
      <header className="Header">
        Runeword Calculator
      </header>
      <div className="Panes">
        <RuneCounter selectedRunes={selectedRunes} setSelectedRunes={setSelectedRunes} highlightedRunes={highlightedRunes} />
        <RuneWords selectedRunes={selectedRunes} setSelectedRunes={setSelectedRunes} runeWordMatchesByName={runeWordMatchesByName} setHighlightedRune={setHighlightedRune} />
      </div>
    </div>
  );
}

export default App;
