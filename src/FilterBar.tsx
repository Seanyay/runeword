import React from 'react';
import './App.css';
import { runeWordsById } from './constants/runeWords';
import { ISelectedRunes } from './interfaces';

interface IProps extends ISelectedRunes {
  runeWordMatchItems: JSX.Element[];
}

function FilterBar(props: IProps) {
  const { runeWordMatchItems, setSelectedRunes, selectedRunes } = props;

  function reset() {
    setSelectedRunes(new Map());
  }

  return (
    <div className="FilterBar">
      {selectedRunes.size > 0 && <button className="Reset" onClick={reset} />}
      {runeWordMatchItems.length > 0 && <div className="Count">Showing {runeWordMatchItems.length} of {runeWordsById.size} runewords</div>}
    </div>
  );
}

export default FilterBar;
