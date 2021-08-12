import React, { Fragment } from 'react';
import './RuneWord.css';
import { IRuneWord, SelectedRune } from './interfaces';
import { runesById } from './constants/runes';

interface IProps {
  runeWord: IRuneWord;
  selectedRunes: SelectedRune;
}

function RuneWord(props: IProps) {
  const { runeWord, selectedRunes } = props;
  const { name, ladderOnly, attributes, itemTypes, runes } = runeWord;
  const wordItems: JSX.Element[] = Array.from(runes, (rune, i) => {
    const r = runesById.get(rune);
    const ownedCount = selectedRunes.get(rune);
    return (
      <Fragment key={i}>
        <div className={`WordPart ${ownedCount && "IsOwned"}`}>
          <img className="SmallRune" src={r?.image} alt={`${r?.name}`} title={`${r?.name}`} />
          <div>{r?.name}</div>
        </div>
        {i < runes.length - 1 ? <div className="WordPartPlus">+</div> : null}
      </Fragment>
    );
  });

  return (
    <div className="RuneWord">
      <header className="Header">{name}</header>
      <div className="Type">
        <span className="Sockets">({runes.length}) Socket</span> {itemTypes.join(', ')}
      </div>
      <div className="Word">{wordItems}</div>
      <div className="Body">{attributes.map((a, i) => <p key={i}>{a}</p>)}</div>
      {ladderOnly && <div className="Ladder">Ladder only</div>}
    </div>
  );
}

export default RuneWord;
