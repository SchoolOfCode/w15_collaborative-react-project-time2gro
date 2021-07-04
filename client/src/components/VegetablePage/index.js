import React from 'react';

import Banner from '../Banner';
import Button from '../Button';
import Footer from '../Footer';
import NoButtonCard from '../NoButtonCard';

export default function VegetablePage(props) {
  const {
    name,
    description,
    optimal_sun,
    spacing,
    when_to_plant,
    watering,
    feeding,
    harvesting,
  } = props.currentVegetable[0];
  return (
    
          <Banner />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
          <Button handleClick={props.handleHomeClick} />
          <Footer />

    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-10">
      <Banner />
      <NoButtonCard heading={name} paragraph={description} />
      <NoButtonCard
        heading='Sun, Space & Time'
        subheadingOne='Optimal Sun'
        paragraphOne={optimal_sun}
        subheadingTwo='Space'
        paragraphTwo={spacing}
        subheadingThree='When'
        paragraphThree={when_to_plant}
        detailed={true}
      />
      <NoButtonCard
        heading='Nurturing'
        subheadingOne='Watering'
        paragraphOne={watering}
        subheadingTwo='Feeding'
        paragraphTwo={feeding}
        subheadingThree='Harvesting'
        paragraphThree={harvesting}
        detailed={true}
      />
      <Button handleClick={props.handleHomeClick} icon='home' />
      <Footer />
        
         </div>
        <div className="col"></div>
      </div>

    </div>
  );
}
