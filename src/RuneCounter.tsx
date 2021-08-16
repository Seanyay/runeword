import React from 'react';
import './App.css';
import { runesById } from './constants/runes';
import { Runes } from './enums/Runes';
import { SelectedRune } from './interfaces';
import Rune from './Rune';

interface IProps {
  highlightedRunes: Set<Runes>;
  selectedRunes: SelectedRune;
  setRunes: (runes: SelectedRune) => void;
}

function RuneCounter(props: IProps) {
  const { setRunes, selectedRunes, highlightedRunes } = props;
  const runeImages: JSX.Element[] = [];

  for (const r of runesById.entries()) {
    runeImages.push(<Rune key={r[0]} rune={r[1]} setRunes={setRunes} selectedRunes={selectedRunes} highlightedRunes={highlightedRunes} />);
  }

  return (
    <div className="RuneCounter">
      {runeImages}
    </div>
  );
}

export default RuneCounter;
