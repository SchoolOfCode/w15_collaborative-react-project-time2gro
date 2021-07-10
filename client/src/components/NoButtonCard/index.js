import React from 'react';
import aboutImg from '../../img/about-banner.png';

export default function NoButtonCard(props) {
  let text;
  if (props.detailed) {
    text = (
      <div className='card-body'>
        <h5 className='card-title'>{props.heading}</h5>
        <h6 className='card-subtitle text-muted'>{props.subheadingOne}</h6>
        <p className='card-text'>{props.paragraphOne}</p>
        <h6 className='card-subtitle text-muted'>{props.subheadingTwo}</h6>
        <p className='card-text'>{props.paragraphTwo}</p>
        <h6 className='card-subtitle text-muted'>{props.subheadingThree}</h6>
        <p className='card-text'>{props.paragraphThree}</p>
      </div>
    );
  } else {
    text = (
      <div className='card-body'>
        <h5 className='card-title'>{props.heading}</h5>
        <p className='card-text'>{props.paragraphOne}</p>
        <p className='card-text'>
          <strong>{props.paragraphTwo}</strong>
        </p>
      </div>
    );
  }
  let imgSrc;
  switch (props.type) {
    case 'about':
      imgSrc = aboutImg;
      break;
    case 'dynamic':
      imgSrc = props.img;
      break;
    default:
      break;
  }
  let img;
  if (props.isImg) {
    img = (
      <img
        className='card-img-top'
        style={{ objectFit: 'cover', objectPosition: '40% 5%' }}
        src={imgSrc}
        alt='vegetables'
        height='200px'
      ></img>
    );
  }

  return (
    <div className='card shadow mb-3'>
      {img}
      <div className='card-body'>{text}</div>
    </div>
  );
}
