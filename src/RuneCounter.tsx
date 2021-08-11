import React from 'react';
import './App.css';
import { runesById } from './constants/runes';
import { ISelectedRunes } from './interfaces';
import Rune from './Rune';


function RuneCounter(props: ISelectedRunes) {
  const { setSelectedRunes, selectedRunes } = props;
  const runeImages: JSX.Element[] = [];

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
