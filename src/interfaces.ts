import { ArmorTypes, Slots, WeaponTypes } from "./enums/ItemTypes";
import { Runes } from "./enums/Runes";
import { RuneWords } from "./enums/RuneWords";

export interface IStats {
  slots: Slots | Slots[];
  attributes: NonNullable<string[]>;
}

export interface IRune {
  id: Runes;
  name: string;
  level?: number;
  stats: IStats[];
  image?: string;
}

export interface IRuneWord {
  name: RuneWords;
  runes: Runes[];
  itemTypes: Array<ArmorTypes | WeaponTypes>;
  attributes: NonNullable<string[]>;
  ladderOnly: boolean;
}