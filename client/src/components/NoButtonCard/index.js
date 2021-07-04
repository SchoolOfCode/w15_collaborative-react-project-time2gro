import React from "react";
import aboutImg from "../../img/about-banner.png";

export default function NoButtonCard(props) {
  return (
    <div className="card border-secondary mb-3">
      <img
        className="card-img-top"
        src={aboutImg}
        alt="vegetables"
        height="150px"
        width="300px"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">{props.paragraph}</p>
      </div>
    </div>
  );
}
