import React from 'react';
import aboutImg from '../../img/about-banner.png';

// Card 1
// vegetable name
// description

// Card 2
// title - Sun, Space & Time
// subheading - Optimal Sun
// p - optimal-sun
// subheading - Space
// p - spacing
// subheading - When
// p - when_to_plant

// Card 3
// title - Nurturing
// subheading - Watering
// p - watering
// subheading - Feeding
// p - feeding
// subheading - Harvesting
// p - harvesting

export default function NoButtonCard(props) {
  return (
    <div className='card'>
      {/* <img
        className='card-img-top'
        src={aboutImg}
        alt='vegetables'
        width='250px'
        height='200px'
      ></img> */}
      <div className='card-body'>
        <h5 className='card-title'>{props.heading}</h5>
        <h6 className='card-subtitle'>{props.subheading}</h6>
        <p className='card-text'>{props.paragraph}</p>
      </div>
    </div>
  );
}
