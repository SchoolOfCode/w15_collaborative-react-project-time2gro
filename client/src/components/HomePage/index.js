import React from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import NoButtonCard from "../NoButtonCard";
import SearchCard from "../SearchCard";

export default function HomePage(props) {
  return (
    <div>
      Home
      <Banner />
      <NoButtonCard />
      <SearchCard handleSearch={props.handleSearch}/>
      <Footer />
    </div>
  );
}
