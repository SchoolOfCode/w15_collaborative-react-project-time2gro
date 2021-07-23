import React from "react";
import aboutImg from "../../img/about-banner.png";
import Button from "../Button";

export default function ButtonCard(props) {
  return (
    <div className="card shadow mb-3" data-testid="button-container">
      <img
        className="card-img-top"
        src={aboutImg}
        alt="vegetables"
        height="200px"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <Button
          buttonText="Select"
          data={props.buttonId}
          handleClick={props.handleClick}
        />
      </div>
    </div>
  );
}
