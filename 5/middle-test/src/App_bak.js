import React, { useState, useEffect } from 'react';
import datas from './data/cards'
import BisinessCard from './component/BusinessCard'

// 추첨하기 버튼과 명함 컴포넌트를 구현

export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  useEffect(() => {
    setCards(datas);
  }, []);

  function draw() {
    // 조건 추가
    if (pickedCards.length > 2) {
      //alert
      const names = pickedCards.reduce((acc, cur) => {
        return acc = acc.concat(`${cur.name}, `)
      }, "");
      return alert(`당첨자는 ${names} 입니다.`)
    }

    // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber));
    // 당첨자(배열) 관리
    setPickedCards([...pickedCards, randomItem]);
  }

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {/* {pickedCards.length > 0 && <BisinessCard info={pickedCards} />} */}
      {pickedCards.length > 0 && pickedCards.map(pickedCard => <BisinessCard info={pickedCard} key={pickedCard.phoneNumber} />)}
    </div>
  );
}


