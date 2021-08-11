import React from 'react';
import './App.css';
import { IRuneWord } from './interfaces';
import RuneWord from './RuneWord';

interface IProps {
  runeWordMatchesByName: Set<IRuneWord>;
}

function RuneWords(props: IProps) {
  const { runeWordMatchesByName } = props;
  const runeWordMatchItems: JSX.Element[] = [];

  runeWordMatchesByName.forEach(rw => {
    runeWordMatchItems.push(<RuneWord key={rw.name} runeWord={rw} />);
  })

  return (
    <div className="RuneWords">
      {runeWordMatchItems.length ? runeWordMatchItems : <div className="NoResults">Select runes to see suggested rune words</div>}
    </div>
  );
}

export default RuneWords;
