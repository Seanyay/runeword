import React from 'react';
import styles from './sass/App.module.sass';
import { runeWordsById } from './constants/runeWords';
import { Runes } from './enums/Runes';
import { RuneWordSort } from './enums/RuneWordSort';
import FilterBar from './FilterBar';
import { IRuneWord, ISelectedRunes } from './interfaces';
import RuneWord from './RuneWord';
import { ItemTypes } from './enums/ItemTypes';

interface IProps extends ISelectedRunes {
  runeWordMatchesByName: Set<IRuneWord>;
  setHighlightedRune: (rune: Runes, remove?: boolean) => void;
  sortMethod: RuneWordSort;
  setRuneWordSort: (method: RuneWordSort) => void;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  socketFilter: string;
  setSocketFilter: React.Dispatch<React.SetStateAction<string>>;
  itemTypeFilters: Set<ItemTypes>;
  setItemTypeFilters: React.Dispatch<React.SetStateAction<Set<ItemTypes>>>;
}

function RuneWords(props: IProps) {
  const { runeWordMatchesByName, selectedRunes, setSelectedRunes, setHighlightedRune, sortMethod, setRuneWordSort, filterSearch, setFilterSearch, setSocketFilter, socketFilter, itemTypeFilters, setItemTypeFilters } = props;
  const runeWordMatchItems: JSX.Element[] = [];

  runeWordMatchesByName.forEach(rw => {
    if (!filterSearch.length || (filterSearch.length && (rw.name.toLowerCase().search(filterSearch.toLowerCase()) > -1))) { 
      runeWordMatchItems.push(<RuneWord key={rw.name} runeWord={rw} selectedRunes={selectedRunes} setHighlightedRune={setHighlightedRune} />);
    }
  })

  return (
    <div className={styles.RuneWords}>
      {selectedRunes.size > 0 && <FilterBar itemTypeFilters={itemTypeFilters} setItemTypeFilters={setItemTypeFilters} socketFilter={socketFilter} setSocketFilter={setSocketFilter} filterSearch={filterSearch} setFilterSearch={setFilterSearch} setRuneWordSort={setRuneWordSort} sortMethod={sortMethod} setSelectedRunes={setSelectedRunes} selectedRunes={selectedRunes} />}
      <div className={styles.RuneWordsContent}>
        {runeWordMatchItems.length ? runeWordMatchItems : <div className={styles.NoResults}>Select runes to see suggested rune words</div>}
      </div>
      {runeWordMatchItems.length > 0 && <div className={styles.Count}>Showing {runeWordMatchItems.length} of {runeWordsById.size} runewords</div>}
    </div>
  );
}

export default RuneWords;
