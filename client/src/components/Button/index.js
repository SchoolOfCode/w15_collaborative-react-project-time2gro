import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        onClick={props.handleClick}
        className={(props.icon, "btn btn-primary")}
      >
        {props.buttonText}
      </button>
    </div>
  );
}
