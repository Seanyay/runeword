import React from 'react';
import './App.css';
import { runesById } from './constants/runes';
import { Runes } from './enums/Runes';
import { StateDispatch } from './interfaces';
import Rune from './Rune';

interface IProps {
  selectedRunes: Set<Runes>;
  setSelectedRunes: StateDispatch<Set<Runes>>;
}


function RuneCounter(props: IProps) {
  const { setSelectedRunes, selectedRunes } = props;
  const runeImages = [] as any;
  console.log(props);

  for (const r of runesById.entries()) {
    runeImages.push(<Rune key={r[0]} rune={r[1]} setSelectedRunes={setSelectedRunes} selectedRunes={selectedRunes} />);
  }

  return (
    <div className="RuneCounter">
      {runeImages}
    </div>
  );
}

export default RuneCounter;
