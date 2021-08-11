import React from 'react';
import './App.css';
import { runesById } from './constants/runes';
import Rune from './Rune';

function RuneCounter() {
  const runeImages = [];

  for (const r of runesById.entries()) {
    runeImages.push(<Rune key={r[0]} rune={r[1]} />);
  }

  return (
    <div className="RuneCounter">
      {runeImages}
    </div>
  );
}

export default RuneCounter;
