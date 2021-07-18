import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';
import NoButtonCard from '../NoButtonCard';
import SearchCard from '../SearchCard';
import ButtonCard from '../ButtonCard';
import { aboutParagraphOne } from '../../utils/text';
import { aboutParagraphTwo } from '../../utils/text';
import { aboutHeading } from '../../utils/text';
import { difficultyHeading } from '../../utils/text';



export default function HomePage(props) {
  return (
    <div>
      <Banner />
      <NoButtonCard
        isImg={true}
        type='about'
        paragraphOne={aboutParagraphOne}
        paragraphTwo={aboutParagraphTwo}
        heading={aboutHeading}
      />
      <SearchCard
        options={props.options}
        handleChange={props.handleChange}
        handleSearchClick={props.handleSearchClick}
      />
      <ButtonCard
        heading={difficultyHeading}
        handleClick={props.handleQuestionClick}
      />
      <Footer />
    </div>
  );
}
