import { RuneWordSort } from "../enums/RuneWordSort";
import { ISelectOption } from "../interfaces";

const sortOptions: ISelectOption<RuneWordSort>[] = [
  {
    label: "Have Runes",
    value: RuneWordSort.HAVE_RUNES
  },
  {
    label: "Alphabetical (Ascending)",
    value: RuneWordSort.ALPHABETICAL_ASC
  },
  {
    label: "Alphabetical (Descending)",
    value: RuneWordSort.ALPHABETICAL_DESC
  },
  {
    label: "CLVL (Ascending)",
    value: RuneWordSort.CLVL_ASC
  },
  {
    label: "CLVL (Descending)",
    value: RuneWordSort.CLVL_DESC
  }
];

const socketFilterOptions: ISelectOption<string>[] = [
  {
    label: 'Any',
    value: '',
  },
  {
    label: '2',
    value: '2'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '4',
    value: '4'
  },
  {
    label: '5',
    value: '5'
  },
  {
    label: '6',
    value: '6'
  }
];

export { sortOptions, socketFilterOptions };
