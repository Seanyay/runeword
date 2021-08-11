import React from 'react';
import './App.css';
import { IRune } from './interfaces';

interface IProps {
  rune: IRune;
}

function Rune(props: IProps) {
  const { name, image } = props.rune;

  return (
    <div className="Rune">
      <img src={image} alt={`${name} rune`} />
      {name}
    </div>
  );
}

export default Rune;
