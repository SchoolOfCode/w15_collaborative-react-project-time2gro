import React from 'react';

export default function SearchCard(props) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Search for a Vegetable!</h5>
        <p className='card-text'>Enter the vegetable of your choice below.</p>
        <input value={props.inputValue} onChange={props.handleSearch}></input>
        <button onClick={props.handleSearchClick}>Search</button>
      </div>
    </div>
  );
}
