import React from "react";
import aboutImg from "../../img/about-banner.png";

export default function NoButtonCard(props) {
  let text;
  if (props.detailed) {
    text = (
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <h6 className="card-subtitle text-muted">{props.subheadingOne}</h6>
        <p className="card-text">{props.paragraphOne}</p>
        <h6 className="card-subtitle text-muted">{props.subheadingTwo}</h6>
        <p className="card-text">{props.paragraphTwo}</p>
        <h6 className="card-subtitle text-muted">{props.subheadingThree}</h6>
        <p className="card-text">{props.paragraphThree}</p>
      </div>
    );
  } else {
    text = (
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">{props.paragraph}</p>
      </div>
    );
  }

  return (
    <div className="card border-secondary mb-3">
      <img
        className="card-img-top"
        style={{ objectFit: "cover", objectPosition: "40% 5%" }}
        src={aboutImg}
        alt="vegetables"
        height="200px"
      ></img>
      <div className="card-body">{text}</div>
    </div>
  );
}
