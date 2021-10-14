import React, { useEffect, useState } from 'react';
import styles from './sass/ItemTypesFilter.module.sass'
import { itemTypesById } from './constants/itemTypes';
import { ItemTypes, Slots } from './enums/ItemTypes';
import { IItemType } from './interfaces';

interface IProps {
  itemTypeFilters: Set<ItemTypes>;
  setItemTypeFilters: React.Dispatch<React.SetStateAction<Set<ItemTypes>>>;
  handleSelectAllItemTypes: () => void;
}

function ItemTypesFilter(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { itemTypeFilters, setItemTypeFilters, handleSelectAllItemTypes } = props;

  const weaponItems: JSX.Element[] = [];
  const armorItems: JSX.Element[] = [];
  const itemTypeButtonClass = `${isOpen ? styles.IsOpen : ''}`;

  function handleItemFilterChange(itemType: IItemType) {
    const { id } = itemType;
    const filters = new Set(itemTypeFilters);
    if (filters.has(id)) {
      filters.delete(id);
    }
    else {
      filters.add(id);
    }
    setItemTypeFilters(filters);
  }

  function handleDeselectAll() {
    setItemTypeFilters(new Set());
  }

  // Default everything to selected
  useEffect(() => {
    handleSelectAllItemTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  for (const it of itemTypesById) {
    const [, itemType] = it;
    const arr = itemType.slot === Slots.WEAPON ? weaponItems : armorItems;
    const { name, id, hideFilter } = itemType;
    const itemTypeId = `itemType_${name}`;
    let rowItem: JSX.Element;

    if (hideFilter) {
      continue;
    }

    rowItem = (
      <div key={name} className={`${styles.Row} ${styles.Child}`}>
        <input id={itemTypeId} type="checkbox" checked={itemTypeFilters.has(id)} onChange={() => handleItemFilterChange(itemType)} />
        <label htmlFor={itemTypeId}>{name}</label>
      </div>
    );

    arr.push(rowItem);
  }

  return (
    <div className={`${styles.ItemTypesFilter} ${itemTypeButtonClass}`}>
      <header className={styles.Header}>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.OpenItemType}>Filter by item type</button>
        {isOpen && (
          <div className={styles.SelectButtons}>
            <button className={styles.SelectBtn} onClick={handleSelectAllItemTypes}>Select All</button>
            <button className={styles.SelectBtn} onClick={handleDeselectAll}>Deselect All</button>
          </div>
        )}
      </header>
      <div className={styles.Content}>
        <fieldset className={styles.Weapons}>
          <legend className={`${styles.Row} ${styles.Parent1}`}>Weapons</legend>
          {weaponItems}
        </fieldset>
        <fieldset className={styles.Armor}>
          <legend className={`${styles.Row} ${styles.Parent1}`}>Armor</legend>
          {armorItems}
        </fieldset>
      </div>
    </div>
  ); 
}

export default ItemTypesFilter;
