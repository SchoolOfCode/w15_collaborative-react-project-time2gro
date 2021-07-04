import React from "react";

import Banner from "../Banner";
import Button from "../Button";
import Footer from "../Footer";
import NoButtonCard from "../NoButtonCard";

export default function VegetablePage(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-10">
          <Banner />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <Button handleClick={props.handleHomeClick} />
          <Footer />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
