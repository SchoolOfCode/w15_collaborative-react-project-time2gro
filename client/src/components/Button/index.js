import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick} className={props.icon}>
        {props.buttonText}
      </button>
    </div>
  );
}
