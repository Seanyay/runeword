import React from 'react';
import styles from './sass/ItemTypesFilter.module.sass'
import { itemTypesById } from './constants/itemTypes';
import { ItemTypes, Slots } from './enums/ItemTypes';

function ItemTypesFilter() {
  const weaponItems: JSX.Element[] = [];
  const armorItems: JSX.Element[] = [];

  itemTypesById.forEach(itemType => {
    const arr = itemType.slot === Slots.WEAPON ? weaponItems : armorItems;
    const { name, parentTypes } = itemType;
    const itemTypeId = `itemType_${name}`;
    let rowClass = styles.Child;
    let rowItem: JSX.Element;

    const isParent1 = parentTypes == null;
    const isParent2 = parentTypes?.size === 1 && (parentTypes.has(ItemTypes.WEAPONS) || parentTypes.has(ItemTypes.ARMOR));
    const isChild = !isParent1 && !isParent2;

    if (isParent1) {
      rowClass = ` ${styles.Parent1}`;
    }
    else if (isParent2) {
      rowClass = ` ${styles.Parent2}`;
    }
    else if (isChild) {
      rowClass = ` ${styles.Child}`;
    }

    rowItem = isParent1 ? (
      <legend key={name} className={`${styles.Row} ${rowClass}`}>
        <input id={itemTypeId} type="checkbox" />
        <label htmlFor={itemTypeId}>{name}</label>
      </legend>
    ) : (
      <div key={name} className={`${styles.Row} ${rowClass}`}>
        <input id={itemTypeId} type="checkbox" />
        <label htmlFor={itemTypeId}>{name}</label>
      </div>
    );

    arr.push(rowItem);
  })

  return (
    <div className={styles.ItemTypesFilter}>
      <header className={styles.Header}>
        Item types
        <button className={styles.SelectAll}>Select All</button>
      </header>
      <div className={styles.Content}>
        <fieldset className={styles.Weapons}>{weaponItems}</fieldset>
        <fieldset className={styles.Armor}>{armorItems}</fieldset>
      </div>
    </div>
  ); 
}

export default ItemTypesFilter;
