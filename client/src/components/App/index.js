import React, { useState, useEffect } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';
import QuestionPage from '../QuestionPage';

import logo from '../../logo.svg';
import {
  answersArray,
  difficultyLevel,
  answerDifficultyLevel,
} from '../../utils/text';
import './App.css';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isVegetablePage, setIsVegetablePage] = useState(false);
  const [isQuestionPage, setIsQuestionPage] = useState(false);
  const [vegetableToSearch, setVegetableToSearch] = useState('');
  const [apiData, setApiData] = useState([]);
  const [currentVegetable, setCurrentVegetable] = useState({});
  const [answers, setAnswers] = useState(answersArray);
  const [userDifficulty, setUserDifficulty] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(difficultyLevel);
  const [selectDifficulty, setSelectDifficulty] = useState(
    answerDifficultyLevel
  );
  const [vegetableList, setVegetableList] = useState([]);

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

  function handleDifficultyClick(e) {
    setUserDifficulty(e.target.dataset.button);
    let currentDifficulty = e.target.dataset.button;

    let vegetableDifficultySelection = answerDifficultyLevel.filter(
      (vegetable) => {
        return vegetable.difficulty === currentDifficulty;
      }
    );

    let vegetables = [];
    vegetableDifficultySelection.forEach((element) => {
      let correctDifficultyIndex = apiData.findIndex((item) => {
        return element.name === item.name;
      });
      let difficultyMatchedVegetables = [
        ...apiData.slice(correctDifficultyIndex, correctDifficultyIndex + 1),
      ];
      vegetables.push(difficultyMatchedVegetables);
    });
    setVegetableList(vegetables);
    setIsQuestionPage(false);
    setIsVegetablePage(false);
    setIsHomePage(true);
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
        handleClick={handleDifficultyClick}
        currentQuestion={currentQuestion}
      />
    );
  }
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-lg-10'>{pageToDisplay}</div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
