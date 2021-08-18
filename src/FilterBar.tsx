import React from 'react';
import styles from './sass/FilterBar.module.sass';
import sortOptions from './constants/filterOptions';
import { RuneWordSort } from './enums/RuneWordSort';
import { ISelectedRunes } from './interfaces';
import { removeItem } from './utils';
import { itemTypeNames } from './constants/itemTypes';

interface IProps extends ISelectedRunes {
  setRuneWordSort: (method: RuneWordSort) => void;
  sortMethod: RuneWordSort;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
}

function FilterBar(props: IProps) {
  const { setSelectedRunes, sortMethod, setRuneWordSort, setFilterSearch, filterSearch } = props;
  const sortOptionItems: JSX.Element[] = Array.from(sortOptions, fo => {
    return <option key={fo.value} value={fo.value}>{fo.label}</option>;
  });

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRuneWordSort(+e.target.value);
  }

  function handleSetFilterSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setFilterSearch(e.target.value);
  }

  function reset() {
    setSelectedRunes(new Map());
    setFilterSearch('');
    removeItem('runes');
  }

  const itemTypeNameItems: JSX.Element[] = [];
  itemTypeNames.forEach(itemType => {
    itemTypeNameItems.push(<div key={itemType.name}>{itemType.name}</div>);
  })

  return (
    <div className={styles.FilterBar}>
      <div className={styles.Reset} onClick={reset} />
      <input type="text" value={filterSearch} onChange={handleSetFilterSearch} placeholder="Filter by runeword name" />
      <div>Sort <select value={sortMethod} onChange={handleFilterChange}>{sortOptionItems}</select></div>
      <div className={styles.ItemTypes}>
        {itemTypeNameItems}
      </div>
    </div>
  );
}

export default FilterBar;
