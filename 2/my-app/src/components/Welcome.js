import React from 'react'
import cat from '../images/cat.jpg'

function Welcome({ withImg, firstName, lastName }) {
  //image + Hello, firstName, lastName
  return (
    <>
      {withImg && <img src={cat} alt='welcomeCat' height='200' />}
      <div>Hello! </div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  )
}

export default Welcome
