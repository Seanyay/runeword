import { ItemTypes } from "../enums/ItemTypes";

const itemTypeNames: Map<ItemTypes, string> = new Map([
  [ItemTypes.WEAPONS, "Weapons"],
  [ItemTypes.MELEE_WEAPONS, "Melee Weapons"],
  [ItemTypes.AXES, "Axes"],
  [ItemTypes.MACES, "Maces"],
  [ItemTypes.SWORDS, "Swords"],
  [ItemTypes.STAVES, "Staves"],
  [ItemTypes.CLUBS, "Clubs"],
  [ItemTypes.POLEARMS, "Polearms"],
  [ItemTypes.SCEPTERS, "Scepters"],
  [ItemTypes.HAMMERS, "Hammers"],
  [ItemTypes.MISSILE_WEAPONS, "Missile Weapons"],
  [ItemTypes.CROSSBOWS, "Crossbows"],
  [ItemTypes.BOWS, "Bows"],
  [ItemTypes.JAVELINS, "Javelins"],
  [ItemTypes.DAGGERS, "Daggers"],
  [ItemTypes.SPEARS, "Spears"],
  [ItemTypes.THROWING, "Throwing"],
  [ItemTypes.WANDS, "Wands"],
  [ItemTypes.AMAZON_WEAPONS, "Amazon Weapons"],
  [ItemTypes.SORCERESS_ORBS, "Sorceress Orbs"],
  [ItemTypes.ASSASSIN_KATARS, "Assassin Katars"],
  // Armor types
  [ItemTypes.ARMOR, "Armor"],
  [ItemTypes.SHIELDS, "Shields"],
  [ItemTypes.HELMS, "Helms"],
  [ItemTypes.PALADIN_SHIELDS, "Paladin Shields"],
  [ItemTypes.NECROMANCER_SHRUNKEN_HEADS, "Necromancer Shrunken Heads"],
  [ItemTypes.BARBARIAN_HELMS, "Barbarian Helms"],
  [ItemTypes.DRUID_PELTS, "Druid Pelts"],
]);

export { itemTypeNames };