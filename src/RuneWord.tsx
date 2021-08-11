import React, { Fragment } from 'react';
import './RuneWord.css';
import { IRuneWord } from './interfaces';
import { runesById } from './constants/runes';

interface IProps {
  runeWord: IRuneWord;
}

function RuneWord(props: IProps) {
  const { runeWord } = props;
  const { name, ladderOnly, attributes, itemTypes, runes } = runeWord;
  const wordItems: JSX.Element[] = Array.from(runes, (rune, i) => {
    const r = runesById.get(rune);
    return (
      <Fragment key={i}>
        <div className="WordPart">
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
