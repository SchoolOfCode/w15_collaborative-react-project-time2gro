// Difficulty level Selection Page

import React from "react";
import ButtonCard from "../ButtonCard";
import Banner from "../Banner";
import Footer from "../Footer";



export default function QuestionPage(props) {
  return (
    <div>
      <Banner />
      <h1>{props.currentQuestion}</h1>
      <p>{props.question}</p>
      {props.answers.map((answer) => (
        <ButtonCard
          key={answer.heading}
          handleClick={props.handleClick}
          heading={answer.heading}
          explanation={answer.explanation}
          buttonId={answer.heading}
        />
      ))}
      <Footer />
    </div>
  );
}
