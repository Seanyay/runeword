import { ItemTypes, Slots } from "../enums/ItemTypes";
import { IItemType } from "../interfaces";

const itemTypesById: Map<ItemTypes, IItemType> = new Map([
  // Melee weapons
  [ItemTypes.WEAPONS, { name: "Weapons", slot: Slots.WEAPON }],
  [ItemTypes.MELEE_WEAPONS, { name: "Melee Weapons", parentTypes: new Set([ItemTypes.WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.AXES, { name: "Axes", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.MACES, { name: "Maces", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SWORDS, { name: "Swords", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.STAVES, { name: "Staves", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.DAGGERS, { name: "Daggers", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SPEARS, { name: "Spears", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.CLUBS, { name: "Clubs", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.POLEARMS, { name: "Polearms", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SCEPTERS, { name: "Scepters", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.HAMMERS, { name: "Hammers", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.WANDS, { name: "Wands", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SORCERESS_ORBS, { name: "Sorceress Orbs", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.ASSASSIN_KATARS, { name: "Assassin Katars", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  // Missile weapons
  [ItemTypes.MISSILE_WEAPONS, { name: "Missile Weapons", parentTypes: new Set([ItemTypes.WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.CROSSBOWS, { name: "Crossbows", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MISSILE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.BOWS, { name: "Bows", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MISSILE_WEAPONS]), slot: Slots.WEAPON }],
  // Armor types
  [ItemTypes.ARMOR, { name: "Armor", slot: Slots.ARMOR }],
  [ItemTypes.SHIELDS, { name: "Shields", parentTypes: new Set([ItemTypes.ARMOR]), slot: Slots.SHIELD }],
  [ItemTypes.HELMS, { name: "Helms", parentTypes: new Set([ItemTypes.ARMOR]), slot: Slots.HELM }],
  [ItemTypes.PALADIN_SHIELDS, { name: "Paladin Shields", parentTypes: new Set([ItemTypes.ARMOR]), slot: Slots.SHIELD }]
]);

export { itemTypesById };