import React, { useState, useEffect, useReducer } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';
import QuestionPage from '../QuestionPage';
import VegetableListPage from '../VegetableListPage';

import logo from '../../logo.svg';
import {
  pageToDisplay,
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
    selectDifficulty:answerDifficultyLevel,
    apiData:[]

  }
  let [state,dispatch]= useReducer(reducer,inistialState)
  console.log(inistialState.currentPage)


  function reducer(state,action){
    switch (action.type) {
      case "vegetable":
          return {
            ...state,
            currentPage:'vegetable',
          }

      case 'home':
        return {
          ...state,
          currentPage:'home',
        }

      case 'vegetable list':
        return {...state,
          currentPage:'vegetable list',
        }

      case 'question':
        return {...state,
          currentPage:'question',
        }

      case "currentVeg":
        return {...state,
          currentVegetable:action.payload,
        }

      case "apiData":
        return {...state,
          apiData:action.payload
        }
      
      case "UserDifficulty":
        return{...state,
          
        }

      default:
        break;
    }
  }


  useEffect(() => {
    async function fetchVegetable() {
      const requestUrl = await fetch(
        `http://harvesthelper.herokuapp.com/api/v1/plants/?api_key=4de690f753b6820340d5b208a800a214`
      );
      const dataResponse = await requestUrl.json();
      dispatch({type:"apiData",payload:dataResponse})
      
    }

    fetchVegetable();
  }, []);

  const options = [
    ...state.apiData.map((d) => ({
      value: d.name,
      label: d.name,
    })),
  ];


  const [vegetableToSearch, setVegetableToSearch] = useState('Tomatoes');
  const [answers, setAnswers] = useState(answersArray);
  const [currentQuestion, setCurrentQuestion] = useState(difficultyLevel);
  const [vegetableList, setVegetableList] = useState([]);


  function handleHomeClick() {
    dispatch({type:'home'})
  }

  function handleChange(vegetable) {
    setVegetableToSearch(vegetable.value);
  }

  function handleSearchClick() {
    const index = state.apiData.findIndex(
      (vegetable) => vegetable.name === vegetableToSearch
    );

    let current = [...state.apiData.slice(index, index + 1)];
      console.log(current)
    
    dispatch({type:"currentVeg",payload:current})
    dispatch({type:'vegetable'})
    
  }

  function handleDifficultyClick(e) {

    dispatch({type:"UserDifficulty",payload:e.target.dataset.button})
    let currentDifficulty = e.target.dataset.button;

    let vegetableDifficultySelection = answerDifficultyLevel.filter(
      (vegetable) => {
        return vegetable.difficulty === currentDifficulty;
      }
    );

    let vegetables = [];
    vegetableDifficultySelection.forEach((element) => {
      let correctDifficultyIndex = state.apiData.findIndex((item) => {
        return element.name === item.name;
      });
      let difficultyMatchedVegetables = [
        ...state.apiData.slice(correctDifficultyIndex, correctDifficultyIndex + 1),
      ];
      vegetables.push(difficultyMatchedVegetables);
    });
    setVegetableList(vegetables);
    
    dispatch({type:"vegetable list"})
  }

  function handleVegetableClick(e) {
    console.log(e.target.dataset.button);

    const vegetableIndex = state.apiData.findIndex(
      (vegetable) => vegetable.name === e.target.dataset.button
    );

    let vegetable = [...state.apiData.slice(vegetableIndex, vegetableIndex + 1)];
    
    
    dispatch({type:"vegetable", payload:{vegetable}})
  }

  function handleQuestionClick() {
    
    dispatch({type:"question"})
  }

  let pageToDisplay;
  if (state.currentPage === 'home') {
    pageToDisplay = (
      <HomePage
        options={options}
        // data={setApiData}
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
        handleQuestionClick={handleQuestionClick}
      />
    );
  }

  if (state.currentPage === 'vegetable') {
    pageToDisplay = (
      <VegetablePage
        currentVegetable={state.currentVegetable}
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
        difficulty={state.userDifficulty}
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
