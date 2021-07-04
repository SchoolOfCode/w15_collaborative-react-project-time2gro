import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        onClick={props.handleClick}
        className={props.icon}
        className="btn btn-primary"
      >
        {props.buttonText}
      </button>
    </div>
  );
}
