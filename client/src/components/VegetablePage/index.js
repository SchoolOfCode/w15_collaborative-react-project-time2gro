import React from "react";

import Banner from "../Banner";
import Button from "../Button";
import Footer from "../Footer";
import NoButtonCard from "../NoButtonCard";

export default function VegetablePage(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-md-10 col-lg-8">
          <Banner />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <Button handleClick={props.handleHomeClick} />
          <Footer />
        </div>
        <div class="col">3 of 3</div>
      </div>
    </div>
  );
}
