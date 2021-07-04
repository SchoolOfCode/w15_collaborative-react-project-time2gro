import React from 'react';

import Banner from '../Banner';
import Button from '../Button';
import Footer from '../Footer';
import NoButtonCard from '../NoButtonCard';

export default function VegetablePage(props) {
  return (
    <div>
      <Banner />
      <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
      <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
      <NoButtonCard heading={props.heading} paragraph={props.paragraph} />
      <Button handleClick={props.handleHomeClick} />
      <Footer />
    </div>
  );
}
