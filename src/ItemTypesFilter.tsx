import React from 'react';
import styles from './sass/ItemTypesFilter.module.sass'
import { itemTypeNames } from './constants/itemTypes';
import { Slots } from './enums/ItemTypes';

function ItemTypesFilter() {
  const weaponItems: JSX.Element[] = [];
  const armorItems: JSX.Element[] = [];

  itemTypeNames.forEach(itemType => {
    const arr = itemType.slot === Slots.WEAPON ? weaponItems : armorItems;
    arr.push(<div key={itemType.name}>{itemType.name}</div>);
  })

  return (
    <fieldset className={styles.ItemTypesFilter} name="Item types">
      <legend>Item types</legend>
      <div className={styles.Content}>
        <div className={styles.Weapons}>{weaponItems}</div>
        <div className={styles.Armor}>{armorItems}</div>
      </div>
    </fieldset>
  ); 
}

export default ItemTypesFilter;
