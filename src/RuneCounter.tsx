import React from 'react';
import './App.css';
import { runesById } from './constants/runes';
import { Runes } from './enums/Runes';
import { ISelectedRunes } from './interfaces';
import Rune from './Rune';

interface IProps extends ISelectedRunes {
  highlightedRunes: Set<Runes>;
}

function RuneCounter(props: IProps) {
  const { setSelectedRunes, selectedRunes, highlightedRunes } = props;
  const runeImages: JSX.Element[] = [];

  for (const r of runesById.entries()) {
    runeImages.push(<Rune key={r[0]} rune={r[1]} setSelectedRunes={setSelectedRunes} selectedRunes={selectedRunes} highlightedRunes={highlightedRunes} />);
  }

  return (
    <div className="RuneCounter">
      {runeImages}
    </div>
  );
}

export default RuneCounter;
