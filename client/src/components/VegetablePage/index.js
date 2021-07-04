import React from 'react';

import Banner from '../Banner';
import Button from '../Button';
import Footer from '../Footer';
import NoButtonCard from '../NoButtonCard';

export default function VegetablePage(props) {
  return (
    <div>
      <Banner />
      <NoButtonCard
        heading={props.currentVegetable.name}
        paragraph={props.currentVegetable.description}
      />
      <NoButtonCard
        heading='Sun, Space & Time'
        subheadingOne='Optimal Sun'
        paragraphOne={props.currentVegetable.optimal_sun}
        subheadingTwo='Space'
        paragraphTwo={props.currentVegetable.spacing}
        subheadingThree='When'
        paragraphThree={props.currentVegetable.when_to_plant}
        detailed={true}
      />
      <NoButtonCard
        heading='Nurturing'
        subheadingOne='Watering'
        paragraphOne={props.currentVegetable.watering}
        subheadingTwo='Feeding'
        paragraphTwo={props.currentVegetable.feeding}
        subheadingThree='Harvesting'
        paragraphThree={props.currentVegetable.harvesting}
        detailed={true}
      />
      <Button handleClick={props.handleHomeClick} icon='home' />
      <Footer />
    </div>
  );
}
