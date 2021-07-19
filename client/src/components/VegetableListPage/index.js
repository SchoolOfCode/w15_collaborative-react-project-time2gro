// Vegetable selection page 
// After the user selects difficulty level, this page will give an option of vegetables to grow based on that level of difficulty

import React from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import ButtonCard from "../ButtonCard";

export default function VegetableListPage(props) {
  return (
    <div>
      <Banner />
      <h1>{props.vegetableListHeading}</h1>
      <h2>Difficulty: {`${props.difficulty}`}</h2>
      <p>{props.vegetableListSubheading}</p>
      {props.vegetableList.map((vegetable) => (
        <ButtonCard
          key={vegetable[0].name}
          handleClick={props.handleClick}
          heading={vegetable[0].name}
          buttonId={vegetable[0].name}
        />
      ))}
      <Footer />
    </div>
  );
}
