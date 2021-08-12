import React from 'react';
import './RuneWord.css';
import { IRune, IRuneWord, SelectedRune } from './interfaces';
import { runesById } from './constants/runes';
import { Runes } from './enums/Runes';
import WordPart from './WordPart';

interface IProps {
  runeWord: IRuneWord;
  selectedRunes: SelectedRune;
  setHighlightedRune: (rune: Runes, remove?: boolean) => void;
}

function RuneWord(props: IProps) {
  const { runeWord, selectedRunes, setHighlightedRune } = props;
  const { name, ladderOnly, attributes, itemTypes, runes, level } = runeWord;
  const remainingRunes: Map<Runes, number> = new Map();



  runes.forEach(rune => {
    // bootstrap the fulfilled map
    remainingRunes.set(rune, selectedRunes.get(rune) ?? 0);
  });

  const wordItems: JSX.Element[] = Array.from(runes, (runeId, i) => {
    const rune = runesById.get(runeId);
    const cur = remainingRunes.get(runeId) ?? 0;
    const isOwned = cur != null && cur > 0;
    remainingRunes.set(runeId, cur > 0 ? cur - 1 : 0);

    return (
      <WordPart key={i} rune={rune as IRune} isOwned={isOwned} runes={runes} i={i} setHighlightedRune={setHighlightedRune} />
    );
  });

  return (
    <div className="RuneWord">
      <div className="Clvl">{`CLVL ${level}`}</div>
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
