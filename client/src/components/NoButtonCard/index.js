import React from 'react';
import aboutImg from '../../img/about-banner.png';

export default function NoButtonCard() {
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
        <h5 className='card-title'>About</h5>
        <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo
          tempore, enim sunt repudiandae aspernatur amet ad saepe quod commodi.
          Quisquam sint eaque asperiores repellat perspiciatis accusantium eius,
          ratione fugit.
        </p>
      </div>
    </div>
  );
}
