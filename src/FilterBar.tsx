import React from 'react';
import styles from './sass/FilterBar.module.sass';
import { sortOptions, socketFilterOptions } from './constants/filterOptions';
import { RuneWordSort } from './enums/RuneWordSort';
import { ISelectedRunes } from './interfaces';
import ItemTypesFilter from './ItemTypesFilter';
import { ItemTypes } from './enums/ItemTypes';

interface IProps extends ISelectedRunes {
  setRuneWordSort: (method: RuneWordSort) => void;
  sortMethod: RuneWordSort;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  socketFilter: string;
  setSocketFilter: React.Dispatch<React.SetStateAction<string>>;
  itemTypeFilters: Set<ItemTypes>;
  setItemTypeFilters: React.Dispatch<React.SetStateAction<Set<ItemTypes>>>;
  onlyFullMatches: boolean;
  setOnlyFullMatches: React.Dispatch<React.SetStateAction<boolean>>;
  resetFilters: () => void;
  handleSelectAllItemTypes: () => void;
}

function FilterBar(props: IProps) {
  const { handleSelectAllItemTypes, resetFilters,sortMethod, setRuneWordSort, setFilterSearch, filterSearch, socketFilter, setSocketFilter, itemTypeFilters, setItemTypeFilters, onlyFullMatches, setOnlyFullMatches } = props;

  const sortOptionItems: JSX.Element[] = Array.from(sortOptions, fo => {
    return <option key={fo.value} value={fo.value}>{fo.label}</option>;
  });
  const socketFilterItems: JSX.Element[] = Array.from(socketFilterOptions, fo => {
    return <option key={fo.value} value={fo.value}>{fo.label}</option>;
  });

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRuneWordSort(+e.target.value);
  }

  function handleSetFilterSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setFilterSearch(e.target.value);
  }

  function handleSetSocketFilterChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSocketFilter(e.target.value);
  }


  function handleOnlyFullMatchesChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setOnlyFullMatches(!onlyFullMatches);
  }


  return (
    <div className={styles.FilterBar}>
      <div className={styles.Reset} onClick={resetFilters} />
      <input className={styles.Name} type="text" value={filterSearch} onChange={handleSetFilterSearch} placeholder="Filter by runeword name" />
      <div className={styles.Sockets}>Sockets <select value={socketFilter} onChange={handleSetSocketFilterChange}>{socketFilterItems}</select></div>
      <div className={styles.Sort}>Sort <select value={sortMethod} onChange={handleFilterChange}>{sortOptionItems}</select></div>
      <div className={styles.OnlyFullMatches}>
        <input id="onlyFullMatches" type="checkbox" checked={onlyFullMatches} onChange={handleOnlyFullMatchesChange} /><label htmlFor="onlyFullMatches">Show only complete runewords</label>
      </div>
      <div className={styles.ItemTypes}>
        <ItemTypesFilter itemTypeFilters={itemTypeFilters} setItemTypeFilters={setItemTypeFilters} handleSelectAllItemTypes={handleSelectAllItemTypes} />
      </div>
    </div>
  );
}

export default FilterBar;
