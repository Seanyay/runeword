import React from 'react';
import './App.css';
import { runeWordsById } from './constants/runeWords';
import { Runes } from './enums/Runes';
import { RuneWordSort } from './enums/RuneWordSort';
import FilterBar from './FilterBar';
import { IRuneWord, ISelectedRunes } from './interfaces';
import RuneWord from './RuneWord';

interface IProps extends ISelectedRunes {
  runeWordMatchesByName: Set<IRuneWord>;
  setHighlightedRune: (rune: Runes, remove?: boolean) => void;
  sortMethod: RuneWordSort;
  setRuneWordSort: (method: RuneWordSort) => void;
}

function RuneWords(props: IProps) {
  const { runeWordMatchesByName, selectedRunes, setSelectedRunes, setHighlightedRune, sortMethod, setRuneWordSort } = props;
  const runeWordMatchItems: JSX.Element[] = [];

  runeWordMatchesByName.forEach(rw => {
    runeWordMatchItems.push(<RuneWord key={rw.name} runeWord={rw} selectedRunes={selectedRunes} setHighlightedRune={setHighlightedRune} />);
  })

  return (
    <div className="RuneWords">
      <FilterBar setRuneWordSort={setRuneWordSort} sortMethod={sortMethod} setSelectedRunes={setSelectedRunes} selectedRunes={selectedRunes} />
      <div className="RuneWordsContent">
        {runeWordMatchItems.length ? runeWordMatchItems : <div className="NoResults">Select runes to see suggested rune words</div>}
      </div>
      {runeWordMatchItems.length > 0 && <div className="Count">Showing {runeWordMatchItems.length} of {runeWordsById.size} runewords</div>}
    </div>
  );
}

export default RuneWords;
