import React from 'react';

// Need to change className for icons - use an object for this in utils

export default function Button(props) {
  let button;
  if (props.icon) {
    const iconStyle = {
      fontSize: '2rem',
      color: '#74a322',
    };
    button = (
      <i
        onClick={props.handleClick}
        className={`${props.icon} bi bi-house-fill`}
        style={iconStyle}
      ></i>
    );
  } else {
    button = (
      <button

        data-button={props.data}
        onClick={props.handleClick}
        className='btn'
      >
        {props.buttonText}
      </button>
    );
  }
  return button;
}
