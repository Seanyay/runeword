import React from 'react';
import './App.css';
import { Runes } from './enums/Runes';
import { IRune, StateDispatch } from './interfaces';

interface IProps {
  rune: IRune;
  setSelectedRunes: StateDispatch<Set<Runes>>;
  selectedRunes: Set<Runes>;
}


function Rune(props: IProps) {
  const { setSelectedRunes, selectedRunes, rune } = props;
  const { name, image } = rune;

  function selectRune() {
    const sr = new Set(selectedRunes);
    if (sr.has(rune.id)) {
      sr.delete(rune.id);
    }
    else {
      sr.add(rune.id);
    }
    setSelectedRunes(sr);
  }

  return (
    <div className={`Rune ${selectedRunes.has(rune.id) ? "Selected" : ""}`} onClick={selectRune}>
      <img src={image} alt={`${name} rune`} />
      {name}
    </div>
  );
}

export default Rune;
