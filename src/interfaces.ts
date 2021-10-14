import { Dispatch, SetStateAction } from "react";
import { Slots, ItemTypes } from "./enums/ItemTypes";
import { Runes } from "./enums/Runes";
import { RuneWords } from "./enums/RuneWords";

export type StateDispatch<T> = Dispatch<SetStateAction<T>>;

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
  itemTypes: Array<ItemTypes>;
  attributes: NonNullable<string[]>;
  level: number;
  ladderOnly: boolean;
}

export type SelectedRune = Map<Runes, number>;

export interface ISelectedRunes {
  selectedRunes: SelectedRune;
  setSelectedRunes: StateDispatch<SelectedRune>;
}

export interface ISelectOption<T> {
  label: string;
  value: T;
}

export interface IItemType {
  id: ItemTypes;
  name: string;
  parentTypes?: Set<ItemTypes>;
  slot: Slots;
  hideFilter?: boolean;
}