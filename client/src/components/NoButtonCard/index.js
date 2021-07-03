import React from "react";
import aboutImg from "../../img/about-banner.png";

export default function NoButtonCard(props) {
  return (
    <div className="card">
      {/* <img
        className='card-img-top'
        src={aboutImg}
        alt='vegetables'
        width='250px'
        height='200px'
      ></img> */}
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">{props.paragraph}</p>
      </div>
    </div>
  );
}
