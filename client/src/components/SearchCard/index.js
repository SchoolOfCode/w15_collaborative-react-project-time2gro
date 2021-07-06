import React from 'react';
import Button from '../Button';

export default function SearchCard(props) {
  return (
    <div className='card border-secondary mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>Search for a Vegetable!</h5>
        <p className='card-text'>Enter the vegetable of your choice below.</p>
        <input value={props.inputValue} onChange={props.handleSearch}></input>
        <Button buttonText='Search' handleClick={props.handleSearchClick} />
      </div>
    </div>
  );
}
