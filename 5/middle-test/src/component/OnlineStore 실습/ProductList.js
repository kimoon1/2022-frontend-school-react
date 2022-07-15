import React from 'react'

export default function ProductList(props) {
  // console.log(props.category)
  const style = {
    fontWeight: 'bold',
  }
  return (
    <>
      <div style={style}>{props.category}</div>
      {props.datas.map((el) => (
        el.category === props.category &&
        <>
          <span key={el.name}>{el.name}</span>
          {' '}
          <span>{el.price}</span>
          <br />
        </>
      ))}
    </>

  )
}

