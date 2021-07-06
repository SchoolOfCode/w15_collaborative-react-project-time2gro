import React from 'react';
import ButtonCard from '../ButtonCard';
import Banner from '../Banner';


export default function QuestionPage(props) {
  return (
    <div>
      <Banner/>
      <h1>{props.currentQuestion}</h1>
      <p>{props.question}</p>
      {props.answers.map((answer) => (
        <ButtonCard
          key={answer}
          handleClick={props.handleClick}
          heading={answer}
          buttonId={answer}
        />
      ))}
    </div>
  );
}
