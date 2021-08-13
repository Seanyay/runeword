import React from 'react';
import './App.css';
import filterOptions from './constants/filterOptions';
import { runeWordsById } from './constants/runeWords';
import { RuneWordSort } from './enums/RuneWordSort';
import { ISelectedRunes } from './interfaces';

interface IProps extends ISelectedRunes {
  runeWordMatchItems: JSX.Element[];
  setRuneWordSort: (method: RuneWordSort) => void;
  sortMethod: RuneWordSort;
}

function FilterBar(props: IProps) {
  const { runeWordMatchItems, setSelectedRunes, selectedRunes, sortMethod, setRuneWordSort } = props;
  const filterOptionItems: JSX.Element[] = Array.from(filterOptions, fo => {
    return <option key={fo.value} value={fo.value}>{fo.label}</option>;
  });

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRuneWordSort(+e.target.value);
  }


  function reset() {
    setSelectedRunes(new Map());
  }

  return (
    <div className="FilterBar">
      {selectedRunes.size > 0 && <button className="Reset" onClick={reset} />}
      {selectedRunes.size > 0 && <select value={sortMethod} onChange={handleFilterChange}>{filterOptionItems}</select>}
      {runeWordMatchItems.length > 0 && <div className="Count">Showing {runeWordMatchItems.length} of {runeWordsById.size} runewords</div>}
    </div>
  );
}

export default FilterBar;
