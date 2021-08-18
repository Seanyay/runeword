import { ItemTypes, Slots } from "../enums/ItemTypes";
import { IItemType } from "../interfaces";

const itemTypesById: Map<ItemTypes, IItemType> = new Map([
  // Melee weapons
  [ItemTypes.WEAPONS, { id: ItemTypes.WEAPONS, name: "Weapons", slot: Slots.WEAPON }],
  [ItemTypes.MELEE_WEAPONS, { id: ItemTypes.MELEE_WEAPONS, name: "Melee Weapons", parentTypes: new Set([ItemTypes.WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.AXES, { id: ItemTypes.AXES, name: "Axes", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.MACES, { id: ItemTypes.MACES, name: "Maces", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SWORDS, { id: ItemTypes.SWORDS, name: "Swords", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.STAVES, { id: ItemTypes.STAVES, name: "Staves", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.DAGGERS, { id: ItemTypes.DAGGERS, name: "Daggers", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SPEARS, { id: ItemTypes.SPEARS, name: "Spears", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.CLUBS, { id: ItemTypes.CLUBS, name: "Clubs", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.POLEARMS, { id: ItemTypes.POLEARMS, name: "Polearms", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SCEPTERS, { id: ItemTypes.SCEPTERS, name: "Scepters", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.HAMMERS, { id: ItemTypes.HAMMERS, name: "Hammers", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.WANDS, { id: ItemTypes.WANDS, name: "Wands", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.SORCERESS_ORBS, { id: ItemTypes.SORCERESS_ORBS, name: "Sorceress Orbs", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.ASSASSIN_KATARS, { id: ItemTypes.ASSASSIN_KATARS, name: "Assassin Katars", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MELEE_WEAPONS]), slot: Slots.WEAPON }],
  // Missile weapons
  [ItemTypes.MISSILE_WEAPONS, { id: ItemTypes.MISSILE_WEAPONS, name: "Missile Weapons", parentTypes: new Set([ItemTypes.WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.CROSSBOWS, { id: ItemTypes.CROSSBOWS, name: "Crossbows", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MISSILE_WEAPONS]), slot: Slots.WEAPON }],
  [ItemTypes.BOWS, { id: ItemTypes.BOWS, name: "Bows", parentTypes: new Set([ItemTypes.WEAPONS, ItemTypes.MISSILE_WEAPONS]), slot: Slots.WEAPON }],
  // Armor types
  [ItemTypes.ARMOR, { id: ItemTypes.ARMOR, name: "Armor", slot: Slots.ARMOR }],
  [ItemTypes.SHIELDS, { id: ItemTypes.SHIELDS, name: "Shields", parentTypes: new Set([ItemTypes.ARMOR]), slot: Slots.SHIELD }],
  [ItemTypes.HELMS, { id: ItemTypes.HELMS, name: "Helms", parentTypes: new Set([ItemTypes.ARMOR]), slot: Slots.HELM }],
  [ItemTypes.PALADIN_SHIELDS, { id: ItemTypes.PALADIN_SHIELDS, name: "Paladin Shields", parentTypes: new Set([ItemTypes.ARMOR]), slot: Slots.SHIELD }]
]);

export { itemTypesById };