import React from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import NoButtonCard from "../NoButtonCard";
import SearchCard from "../SearchCard";
import { aboutParagraph } from "../../utils/text";
import { aboutHeading } from "../../utils/text";

export default function HomePage(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-10">
          <Banner />
          <NoButtonCard paragraph={aboutParagraph} heading={aboutHeading} />
          <SearchCard
            handleSearch={props.handleSearch}
            inputValue={props.inputValue}
            handleSearchClick={props.handleSearchClick}
          />
          <Footer />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
