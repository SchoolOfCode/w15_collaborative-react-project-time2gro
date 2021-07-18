import React, { useState, useEffect, useReducer } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';
import QuestionPage from '../QuestionPage';
import VegetableListPage from '../VegetableListPage';

import logo from '../../logo.svg';
import {
  answersArray,
  difficultyLevel,
  answerDifficultyLevel,
  listHeading,
  listSubheading,
} from '../../utils/text';
import './App.css';

function App() {

  let actions={
    
  }

  let inistialState = {
    currentPage:"home",
    vegetableToSearch:'Tomatoes',
    currentVegetable:{},
    answers:answersArray,
    userDifficulty:"",
    currentQuestion:difficultyLevel,
    selectDifficulty:answerDifficultyLevel
  }
  let [state,dispatch]= useReducer(reducer,inistialState)
  console.log(inistialState.currentPage)


  function reducer(state,action){
    switch (action.type) {
      case "vegetable":
        
          return {...state,currentPage:'vegetable'}
      case 'home':
        return {...state,currentPage:'home'}
      case 'vegetable list':
        return {...state,currentPage:'vegetable list'}
      case 'question':
        return {...state,currentPage:'question'}
      default:
        break;
    }
  }



console.log(state)



  const [vegetableToSearch, setVegetableToSearch] = useState('Tomatoes');
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
      console.log(dataResponse);
      setApiData(dataResponse);
    }

    fetchVegetable();
  }, []);

  const options = [
    ...apiData.map((d) => ({
      value: d.name,
      label: d.name,
    })),
  ];

  console.log(options);

  function handleHomeClick() {
    
    dispatch({type:'home'})
  }

  function handleChange(vegetable) {
    setVegetableToSearch(vegetable.value);
  }

  function handleSearchClick() {
    const index = apiData.findIndex(
      (vegetable) => vegetable.name === vegetableToSearch
    );

    let current = [...apiData.slice(index, index + 1)];

    setCurrentVegetable(current);
    dispatch({type:'vegetable'})
    
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
    
    dispatch({type:"vegetable list"})
  }

  function handleVegetableClick(e) {
    console.log(e.target.dataset.button);

    const vegetableIndex = apiData.findIndex(
      (vegetable) => vegetable.name === e.target.dataset.button
    );

    let vegetable = [...apiData.slice(vegetableIndex, vegetableIndex + 1)];
    setCurrentVegetable(vegetable);
    
    dispatch({type:"vegetable"})
  }

  function handleQuestionClick() {
    
    dispatch({type:"question"})
  }

  let pageToDisplay;
  if (state.currentPage === 'home') {
    pageToDisplay = (
      <HomePage
        options={options}
        data={setApiData}
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
        handleQuestionClick={handleQuestionClick}
      />
    );
  }

  if (state.currentPage === 'vegetable') {
    console.log("why")
    pageToDisplay = (
      <VegetablePage
        currentVegetable={currentVegetable}
        handleHomeClick={handleHomeClick}
      />
    );
  }
  if (state.currentPage === 'question') {
    pageToDisplay = (
      <QuestionPage
        answers={answers}
        questionNumber='1'
        handleClick={handleDifficultyClick}
        currentQuestion={currentQuestion}
      />
    );
  }
  if (state.currentPage === 'vegetable list') {
    pageToDisplay = (
      <VegetableListPage
        vegetableListHeading={listHeading}
        vegetableListSubheading={listSubheading}
        difficulty={userDifficulty}
        handleClick={handleVegetableClick}
        currentQuestion={currentQuestion}
        vegetableList={vegetableList}
      />
    );
  }
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-6'>{pageToDisplay}</div>
          <div className='col-lg-3'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
