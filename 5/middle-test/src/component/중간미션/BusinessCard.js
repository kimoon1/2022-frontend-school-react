import React from 'react'


export default function Cardscomponent(props) {

  // console.log(props);
  const { company, team, name, phoneNumber, email } = props.info;
  return (
    <div>
      <div> 회사 : {company} </div>
      <div> 팀 : {team} </div>
      <div> 이름 : {name} </div>
      <div> 폰넘버 : {phoneNumber} </div>
      <div> 이메일 : {email} </div>
    </div>
  );
}

