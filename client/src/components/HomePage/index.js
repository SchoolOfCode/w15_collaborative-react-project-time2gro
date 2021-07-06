import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';
import NoButtonCard from '../NoButtonCard';
import SearchCard from '../SearchCard';
import ButtonCard from '../ButtonCard';
import { aboutParagraph } from '../../utils/text';
import { aboutHeading } from '../../utils/text';

export default function HomePage(props) {
  return (
    <div>
        <Banner />
          <NoButtonCard paragraph={aboutParagraph} heading={aboutHeading} />
          <SearchCard
            handleSearch={props.handleSearch}
            inputValue={props.inputValue}
            handleSearchClick={props.handleSearchClick}
          />
          <ButtonCard
            heading='Let Us Decide'
            handleClick={props.handleQuestionClick}
          />
          <Footer />
        
    </div>
  );
}
