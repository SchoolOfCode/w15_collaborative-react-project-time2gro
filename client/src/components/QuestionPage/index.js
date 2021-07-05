import React from 'react';
import ButtonCard from '../ButtonCard';

export default function QuestionPage(props) {
  return (
    <div>
      <h1>Question {props.questionNumber}</h1>
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
