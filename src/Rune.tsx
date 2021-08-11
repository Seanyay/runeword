import React from 'react';
import './App.css';
import { IRune, ISelectedRunes } from './interfaces';

interface IProps extends ISelectedRunes {
  rune: IRune;
}


function Rune(props: IProps) {
  const { setSelectedRunes, selectedRunes, rune } = props;
  const { id, name, image } = rune;

  function selectRune(dir: number = 1) {
    const sr = new Map(selectedRunes);
    let s = sr.get(rune.id);
    if (s != null) {
      const newVal = s + dir;
      sr.set(rune.id, newVal < 0 ? 0 : newVal);
    }
    else {
      sr.set(rune.id, dir === -1 ? 0 : 1);
    }
    setSelectedRunes(sr);
  }

  function handleInputChange(e) {
    console.log('chg');
  }

  return (
    <div className={`Rune`} onClick={() => selectRune()} onContextMenu={(e) => {
      e.preventDefault();
      selectRune(-1);
    }}>
      <img src={image} alt={`${name} rune`} />
      <span>{name}</span>
      <input className="RuneInput" type="text" onClick={e => e.stopPropagation()} onChange={handleInputChange} value={selectedRunes.get(id) ?? 0} />
    </div>
  );
}

export default Rune;
