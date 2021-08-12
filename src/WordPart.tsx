import React, { Fragment } from 'react';
import { Runes } from './enums/Runes';
import { IRune } from './interfaces';
import './RuneWord.css';

interface IProps {
  rune: IRune;
  runes: Runes[];
  setHighlightedRune: (rune: Runes, remove?: boolean) => void;
  isOwned: boolean;
  i: number;
}

function WordPart(props: IProps) {
  const { setHighlightedRune, rune, isOwned, runes, i } = props;

  return (
    <Fragment key={i}>
      <div className={`WordPart ${isOwned ? "IsOwned" : ""}`} onMouseEnter={() => setHighlightedRune(rune.id)} onMouseLeave={() => setHighlightedRune(rune.id, true)}>
        <img className="SmallRune" src={rune?.image} alt={`${rune?.name}`} title={`${rune?.name}`} />
        <div>{rune?.name}</div>
      </div>
      {i < runes.length - 1 ? <div className="WordPartPlus">+</div> : null}
    </Fragment>
  );
}

export default WordPart;
