import React, { useEffect, useState } from 'react';
import styles from './sass/App.module.sass';
import { runeWordsById } from './constants/runeWords';
import { Runes } from './enums/Runes';
import { RuneWordSort } from './enums/RuneWordSort';
import { IRuneWord, SelectedRune } from './interfaces';
import RuneCounter from './RuneCounter';
import RuneWords from './RuneWords';
import { convertArrayToMap, convertMapToArray, convertSetToArray, getItem, setItem } from './utils';
import { ItemTypes } from './enums/ItemTypes';

interface IHaveRune {
  runeWord: IRuneWord;
  ratio: number;
}


function App() {
  const [selectedRunes, setSelectedRunes] = useState<SelectedRune>(new Map());
  const [highlightedRunes, setHighlightedRunes] = useState<Set<Runes>>(new Set());
  const [sortMethod, setSortMethod] = useState<RuneWordSort>(RuneWordSort.HAVE_RUNES);
  const [filterSearch, setFilterSearch] = useState('');
  const [socketFilter, setSocketFilter] = useState('');
  const [itemTypeFilters, setItemTypeFilters] = useState<Set<ItemTypes>>(new Set());

  let runeWordMatchesByName: Set<IRuneWord> = new Set();

  // Load saved runes from localStorage
  useEffect(() => {
    const lsRunes = getItem('runes');
    if (lsRunes != null) {
      const r = convertArrayToMap<SelectedRune>(getItem('runes'));
      setSelectedRunes(r);
    }
  }, []);

  // Find the runeword matches
  if (selectedRunes.size) {
    runewordLoop: for (const runeWord of runeWordsById.values()) {
      const { runes, itemTypes } = runeWord;
      // Apply a socket filter
      if (socketFilter && +socketFilter !== runes.length) {
        continue;
      }

      // Apply an item type filter
      if (itemTypeFilters.size > 0) {
        for (const itemType of itemTypes) {
          if (!itemTypeFilters.has(itemType)) {
            continue runewordLoop;
          }
        }
      }
      
      for (const rune of runeWord.runes) {
        const numOfRune = selectedRunes.get(rune);
        if (numOfRune != null && numOfRune && !runeWordMatchesByName.has(runeWord)) {
          runeWordMatchesByName.add(runeWord);
        }
      }
    }

    runeWordMatchesByName = applyRuneWordSort(sortMethod);
  }


  function applyRuneWordSort(sort: RuneWordSort) {
    let o: IRuneWord[] = [];
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
    // Sort by name, ascending
    else if (sort === RuneWordSort.ALPHABETICAL_ASC) {
      o = convertSetToArray<IRuneWord>(runeWordMatchesByName).sort((a, b) => a.name.localeCompare(b.name));
    }
    // Sort by name, descending
    else if (sort === RuneWordSort.ALPHABETICAL_DESC) {
      o = convertSetToArray<IRuneWord>(runeWordMatchesByName).sort((a, b) => b.name.localeCompare(a.name));
    }
    // Sort by CLVL, ascending
    else if (sort === RuneWordSort.CLVL_ASC) {
      o = convertSetToArray<IRuneWord>(runeWordMatchesByName).sort((a, b) => a.level - b.level);
    }
    // Sort by CLVL, descending
    else if (sort === RuneWordSort.CLVL_DESC) {
      o = convertSetToArray<IRuneWord>(runeWordMatchesByName).sort((a, b) => b.level - a.level);
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

  function setRuneWordSort(method: RuneWordSort) {
    setSortMethod(method);
  }

  function setRunes(runes: SelectedRune) {
    setSelectedRunes(runes);
    setItem('runes', convertMapToArray<Runes, number>(runes));
  }
  
  return (
    <div className={styles.App}>
      <div className={styles.Panes}>
        <RuneCounter selectedRunes={selectedRunes} setRunes={setRunes} highlightedRunes={highlightedRunes} />
        <RuneWords itemTypeFilters={itemTypeFilters} setItemTypeFilters={setItemTypeFilters} socketFilter={socketFilter} setSocketFilter={setSocketFilter} filterSearch={filterSearch} setFilterSearch={setFilterSearch} sortMethod={sortMethod} setRuneWordSort={setRuneWordSort} selectedRunes={selectedRunes} setSelectedRunes={setSelectedRunes} runeWordMatchesByName={runeWordMatchesByName} setHighlightedRune={setHighlightedRune} />
      </div>
      <footer className={styles.Footer}>Built by <a href="https://github.com/andyparisi/runeword" target="_blank" rel="noreferrer">Andy Parisi</a></footer>
    </div>
  );
}

export default App;
