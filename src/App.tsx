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
import { itemTypesById } from './constants/itemTypes';
import * as pkg from '../package.json';

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
  const [onlyFullMatches, setOnlyFullMatches] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const filtersAreApplied = filterSearch.length > 0 || socketFilter.length > 0 || itemTypeFilters.size !== itemTypesById.size || onlyFullMatches;

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
  if (selectedRunes.size || searchMode) {
    for (const runeWord of runeWordsById.values()) {
      const { runes, itemTypes } = runeWord;
      // Apply a socket filter
      if (socketFilter && +socketFilter !== runes.length) {
        continue;
      }

      let filterIsActive = false;

      // Apply an item type filter
      for (const itemType of itemTypes) {
        if (itemTypeFilters.has(itemType)) {
          filterIsActive = true;
          break;
        }
      }
      
      // Determine which runewords to show
      for (const rune of runeWord.runes) {
        const numOfRune = selectedRunes.get(rune);
        if ((numOfRune != null && numOfRune && filterIsActive && !runeWordMatchesByName.has(runeWord)) || (filterIsActive && searchMode)) {
          runeWordMatchesByName.add(runeWord);
        }
      }
    }

    // Perform the default sort
    runeWordMatchesByName = applyRuneWordSort(sortMethod);
  }


  function applyRuneWordSort(sort: RuneWordSort) {
    let o: IRuneWord[] = [];
    const haveRunes: IHaveRune[] = [];

    // Figure out how much of a runeword we own
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

      // Don't show partial matches
      if (onlyFullMatches && haveRatio < 1) {
        continue;
      }
      else {
        haveRunes.push(ratio);
      }
    }

    // Primary sort by how many runes you have, secondary sort by clevel
    if (sort === RuneWordSort.HAVE_RUNES) {
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
        <RuneCounter searchMode={searchMode} setSearchMode={setSearchMode} setHighlightedRunes={setHighlightedRunes} selectedRunes={selectedRunes} setRunes={setRunes} highlightedRunes={highlightedRunes} />
        <RuneWords searchMode={searchMode} filtersAreApplied={filtersAreApplied} onlyFullMatches={onlyFullMatches} setOnlyFullMatches={setOnlyFullMatches} itemTypeFilters={itemTypeFilters} setItemTypeFilters={setItemTypeFilters} socketFilter={socketFilter} setSocketFilter={setSocketFilter} filterSearch={filterSearch} setFilterSearch={setFilterSearch} sortMethod={sortMethod} setRuneWordSort={setRuneWordSort} selectedRunes={selectedRunes} setSelectedRunes={setSelectedRunes} runeWordMatchesByName={runeWordMatchesByName} setHighlightedRune={setHighlightedRune} />
      </div>
      <footer className={styles.Footer}>Version {pkg.version}. Built by <a href="https://github.com/andyparisi/runeword" target="_blank" rel="noreferrer">Andy Parisi</a></footer>
    </div>
  );
}

export default App;
