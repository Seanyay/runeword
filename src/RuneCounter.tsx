import React from 'react';
import styles from './sass/App.module.sass';
import { runesById } from './constants/runes';
import { Runes } from './enums/Runes';
import { SelectedRune } from './interfaces';
import Rune from './Rune';
import { removeItem } from './utils';

interface IProps {
  highlightedRunes: Set<Runes>;
  selectedRunes: SelectedRune;
  setRunes: (runes: SelectedRune) => void;
  setHighlightedRunes: React.Dispatch<React.SetStateAction<Set<Runes>>>;
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function RuneCounter(props: IProps) {
  const { setRunes, selectedRunes, highlightedRunes, setHighlightedRunes, searchMode, setSearchMode } = props;
  const runeImages: JSX.Element[] = [];

  for (const r of runesById.entries()) {
    runeImages.push(<Rune key={r[0]} rune={r[1]} setRunes={setRunes} selectedRunes={selectedRunes} highlightedRunes={highlightedRunes} />);
  }

  function clearRunes() {
    setRunes(new Map());
    removeItem('runes');
  }

  function toggleSearchMode(e) {
    setSearchMode(!searchMode);
  }

  return (
    <div className={styles.RuneCounter} onMouseEnter={() => setHighlightedRunes(new Set())}>
      <div className={styles.RuneButtons}>
        <button className={styles.ClearRunes} onClick={clearRunes}>Clear Runes</button>
        <div className={styles.AllRunesFilter}>
          <input id="allRunes" type="checkbox" checked={searchMode} onChange={toggleSearchMode} />
          <label htmlFor="allRunes" className={styles.SearchMode}>
            Filter all runewords, regardless of my runes.
          </label>
        </div>
      </div>
      <div className={styles.RuneImages}>{runeImages}</div>
    </div>
  );
}

export default RuneCounter;
