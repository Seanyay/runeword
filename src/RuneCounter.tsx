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
}

function RuneCounter(props: IProps) {
  const { setRunes, selectedRunes, highlightedRunes, setHighlightedRunes } = props;
  const runeImages: JSX.Element[] = [];

  for (const r of runesById.entries()) {
    runeImages.push(<Rune key={r[0]} rune={r[1]} setRunes={setRunes} selectedRunes={selectedRunes} highlightedRunes={highlightedRunes} />);
  }

  function clearRunes() {
    setRunes(new Map());
    removeItem('runes');
  }

  return (
    <div className={styles.RuneCounter} onMouseEnter={() => setHighlightedRunes(new Set())}>
      <div className={styles.RuneButtons}>
        <button className={styles.SearchRuneWords} onClick={clearRunes}>Search runewords</button>
        <button className={styles.ClearRunes} onClick={clearRunes}>Clear my runes</button>
      </div>
      <div className={styles.RuneImages}>{runeImages}</div>
    </div>
  );
}

export default RuneCounter;
