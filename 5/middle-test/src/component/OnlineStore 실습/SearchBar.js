import React from 'react'

function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  function handleText(e) {
    //setFilter
    props.updateFilter(e.target.name, e.target.value);
  }
  function handleinStockOnly(e) {
    props.updateFilter(e.target.name, e.target.checked)
  }

  return (
    <>
      <input placeholder='Search...' name={"text"} value={text} onChange={handleText} />
      <div>
        <input type='checkbox' id='stock' checked={inStockOnly} name="inStockOnly" onChange={handleinStockOnly} />
        <label htmlFor='stock'>Only show products in stock</label>
      </div>
    </>
  )
}

export default SearchBar
