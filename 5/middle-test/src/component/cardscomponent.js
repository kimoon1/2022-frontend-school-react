import React, { useState } from 'react'
import cards from '../data/cards.js'

function Cardscomponent() {
  const [state, setState] = useState(cards);

  function chuchum() {
    let randomnum = Math.floor(Math.random() * cards.length);
    console.log(randomnum);
  }

  return (
    <div>
      <button onClick={chuchum}>추첨하기</button>
    </div>
  );
}

export default Cardscomponent
