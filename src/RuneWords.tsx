import React from 'react';
import './App.css';

function RuneWords() {
  const runeWordMatches = [] as any;

  return (
    <div className="RuneWords">
      {runeWordMatches.length ? runeWordMatches : <div className="NoResults">Select runes to see suggested rune words</div>}
    </div>
  );
}

export default RuneWords;
