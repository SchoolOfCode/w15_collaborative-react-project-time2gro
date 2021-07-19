// Card with a button advancing to next page
// This is used on:  
// On Home Page for difficulty selection
// Difficulty Selection 
// Vegetable Selection 


import React from "react";
import aboutImg from "../../img/about-banner.png";
import Button from "../Button";

export default function ButtonCard(props) {

  return (
    <div className="card shadow mb-3"> 
      <img
        className="card-img-top"
        src={aboutImg}
        alt="vegetables"
        height="200px"
      ></img>
      <div className="card-body">
        <h2 className="card-title">{props.heading}</h2>
        <p className="card-explanation">{props.explanation}</p>
        <Button
          buttonText="Select"
          data={props.buttonId}
          handleClick={props.handleClick}
        />
      </div>
    </div>
  );
}
