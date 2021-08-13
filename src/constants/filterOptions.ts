import { RuneWordSort } from "../enums/RuneWordSort";
import { ISelectOption } from "../interfaces";

const filterOptions: ISelectOption<RuneWordSort>[] = [
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

export default filterOptions;
