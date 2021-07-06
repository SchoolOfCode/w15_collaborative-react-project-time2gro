import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';

import ButtonCard from '../ButtonCard';

export default function VegetableListPage(props) {
  return (
    <div>
      <Banner />
      {/* <h1>{props.currentQuestion}</h1>
      <p>{props.question}</p> */}
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
