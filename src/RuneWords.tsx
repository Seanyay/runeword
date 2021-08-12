import React from 'react';
import './App.css';
import { Runes } from './enums/Runes';
import FilterBar from './FilterBar';
import { IRuneWord, ISelectedRunes } from './interfaces';
import RuneWord from './RuneWord';

interface IProps extends ISelectedRunes {
  runeWordMatchesByName: Set<IRuneWord>;
  setHighlightedRune: (rune: Runes, remove?: boolean) => void;
}

function RuneWords(props: IProps) {
  const { runeWordMatchesByName, selectedRunes, setSelectedRunes, setHighlightedRune } = props;
  const runeWordMatchItems: JSX.Element[] = [];

  runeWordMatchesByName.forEach(rw => {
    runeWordMatchItems.push(<RuneWord key={rw.name} runeWord={rw} selectedRunes={selectedRunes} setHighlightedRune={setHighlightedRune} />);
  })

  return (
    <div className="RuneWords">
      <FilterBar runeWordMatchItems={runeWordMatchItems} setSelectedRunes={setSelectedRunes} selectedRunes={selectedRunes} />
      <div className="RuneWordsContent">
        {runeWordMatchItems.length ? runeWordMatchItems : <div className="NoResults">Select runes to see suggested rune words</div>}
      </div>
    </div>
  );
}

export default RuneWords;
