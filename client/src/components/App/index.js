import React, { useState, useEffect } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';
import QuestionPage from '../QuestionPage';

import logo from '../../logo.svg';
import { answersArray } from '../../utils/text';
import './App.css';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isVegetablePage, setIsVegetablePage] = useState(false);
  const [isQuestionPage, setIsQuestionPage] = useState(false);
  const [vegetableToSearch, setVegetableToSearch] = useState('');
  const [apiData, setApiData] = useState([]);
  const [currentVegetable, setCurrentVegetable] = useState({});
  const [answers, setAnswers] = useState(answersArray);
  const [userSpace, setUserSpace] = useState('');
  useEffect(() => {
    async function fetchVegetable() {
      const requestUrl = await fetch(
        `http://harvesthelper.herokuapp.com/api/v1/plants/?api_key=4de690f753b6820340d5b208a800a214`
      );
      const dataResponse = await requestUrl.json();
      setApiData(dataResponse);
    }
    fetchVegetable();
  }, []);

  function handleHomeClick() {
    setIsHomePage(!isHomePage);
    setIsVegetablePage(!isVegetablePage);
  }

  function handleSearch(event) {
    setVegetableToSearch(event.target.value);
  }

  function handleSearchClick() {
    const index = apiData.findIndex(
      (vegetable) => vegetable.name === vegetableToSearch
    );

    let current = [...apiData.slice(index, index + 1)];

    setCurrentVegetable(current);
    setIsHomePage(false);
    setIsVegetablePage(true);
  }

  function handleAnswerClick(e) {
    console.log(e.target.dataset.button);
    setUserSpace(e.target.dataset.button);
    setIsQuestionPage(false);
    setIsVegetablePage(true);
  }

  function handleQuestionClick() {
    setIsHomePage(false);
    setIsQuestionPage(true);
  }

  let pageToDisplay;
  if (isHomePage === true) {
    pageToDisplay = (
      <HomePage
        handleSearch={handleSearch}
        inputValue={vegetableToSearch}
        handleSearchClick={handleSearchClick}
        handleQuestionClick={handleQuestionClick}
      />
    );
  }
  if (isVegetablePage === true) {
    pageToDisplay = (
      <VegetablePage
        currentVegetable={currentVegetable}
        handleHomeClick={handleHomeClick}
      />
    );
  }
  if (isQuestionPage === true) {
    pageToDisplay = (
      <QuestionPage
        answers={answers}
        questionNumber='1'
        handleClick={handleAnswerClick}
      />
    );
  }
  return <div className='App'>{pageToDisplay}</div>;
}

export default App;
