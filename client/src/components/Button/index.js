import React from 'react';

// Need to change className for icons - use an object for this in utils

export default function Button(props) {

  let button;
  if (props.icon) {
    button = (
      <i onClick={props.handleClick} className={`${props.icon} fas fa-home`}>
        {props.buttonText}
      </i>
    );
  } else {
    button = <button>{props.buttonText}</button>;
  }
  return button;
}
