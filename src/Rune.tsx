import React from 'react';
import styles from './sass/App.module.sass';
import { Runes } from './enums/Runes';
import { IRune, SelectedRune } from './interfaces';

interface IProps {
  rune: IRune;
  highlightedRunes: Set<Runes>;
  selectedRunes: SelectedRune;
  setRunes: (runes: SelectedRune) => void;
}

function Rune(props: IProps) {
  const { setRunes, selectedRunes, rune, highlightedRunes } = props;
  const { id, name, image } = rune;
  const isHighlighted = highlightedRunes.has(id);

  function selectRune(dir: number = 1, directSet: boolean = false) {
    const sr = new Map(selectedRunes);
    let s = sr.get(rune.id);

    if (directSet) {
      sr.set(rune.id, dir);
    }
    else if (s != null) {
      const newVal = s + dir;
      sr.set(rune.id, newVal < 0 ? 0 : newVal);
    }
    else {
      sr.set(rune.id, dir === -1 ? 0 : 1);
    }

    setRunes(sr);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    if (isNaN(value)) {
      return;
    }
    selectRune(value, true);
  }

  return (
    <div className={`${styles.Rune} ${isHighlighted ? styles.IsHighlighted : ""}`} onClick={() => selectRune()} onContextMenu={(e) => {
      e.preventDefault();
      selectRune(-1);
    }}>
      <img src={image} alt={`${name} rune`} />
      <span>{name}</span>
      <input className={styles.RuneInput} type="text" onClick={e => e.stopPropagation()} onContextMenu={e => e.stopPropagation()} onChange={handleInputChange} value={selectedRunes.get(id) ?? 0} />
    </div>
  );
}

export default Rune;
