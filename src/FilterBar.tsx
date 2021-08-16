import React from 'react';
import './App.css';
import sortOptions from './constants/filterOptions';
import { RuneWordSort } from './enums/RuneWordSort';
import { ISelectedRunes } from './interfaces';
import { removeItem } from './utils';

interface IProps extends ISelectedRunes {
  setRuneWordSort: (method: RuneWordSort) => void;
  sortMethod: RuneWordSort;
}

function FilterBar(props: IProps) {
  const { setSelectedRunes, selectedRunes, sortMethod, setRuneWordSort } = props;
  const sortOptionItems: JSX.Element[] = Array.from(sortOptions, fo => {
    return <option key={fo.value} value={fo.value}>{fo.label}</option>;
  });

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRuneWordSort(+e.target.value);
  }


  function reset() {
    setSelectedRunes(new Map());
    removeItem('runes');
  }

  return (
    <div className="FilterBar">
      {selectedRunes.size > 0 && <button className="Reset" onClick={reset} />}
      {selectedRunes.size > 0 && <select value={sortMethod} onChange={handleFilterChange}>{sortOptionItems}</select>}
    </div>
  );
}

export default FilterBar;
