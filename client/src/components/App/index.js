import React, { useState, useEffect, useReducer } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';
import QuestionPage from '../QuestionPage';
import VegetableListPage from '../VegetableListPage';

import {
  // pageToDisplay,<<<not in use
  answersArray,
  difficultyLevel,
  answerDifficultyLevel,
  listHeading,
  listSubheading,
} from '../../utils/text';
import './App.css';

function App() {

  let pageToDisplay;
// ACTIONS-
  let SET_PAGE_VEG ="vegetable"
  let SET_PAGE_HOME ="home"
  let SET_PAGE_VEG_LIST ="vegetable list"
  let SET_PAGE_QUESTION ='question'
  let CURRENT_VEG ="currentVeg"
  let API_DATA ="apiData"
  let USER_DIFFICULTY ="UserDifficulty"
  
// INSTIAL STATE
  let inistialState = {
    pageToDisplay,
    currentPage:SET_PAGE_HOME,
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


  const options = [
    ...state.apiData.map((d) => ({
      value: d.name,
      label: d.name,
    })),
  ];
    

  function reducer(state,action){
    switch (action.type) {
      case SET_PAGE_VEG:
          return {
            ...state,
            currentPage:'vegetable',
          }

      case SET_PAGE_HOME:
        return {
          ...state,
          currentPage:'home',
          // pageToDisplay:
        }

      case SET_PAGE_VEG_LIST:
        return {...state,
          currentPage:'vegetable list',
        }

      case SET_PAGE_QUESTION:
        return {...state,
          currentPage:'question',
        }

      case CURRENT_VEG:
        return {...state,
          currentVegetable:action.payload,
        }

      case API_DATA:
        return {...state,
          apiData:action.payload
        }
      
      case USER_DIFFICULTY:
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
      dispatch({type:API_DATA,payload:dataResponse})
      
    }

    fetchVegetable();
  }, []);

 

  const [vegetableToSearch, setVegetableToSearch] = useState('Tomatoes');
  const [answers, setAnswers] = useState(answersArray);
  const [currentQuestion, setCurrentQuestion] = useState(difficultyLevel);
  const [vegetableList, setVegetableList] = useState([]);


  function handleHomeClick() {
    dispatch({type:SET_PAGE_HOME})
  }

  function handleChange(vegetable) {
    setVegetableToSearch(vegetable.value);
  }

  function handleSearchClick() {
    const index = state.apiData.findIndex(
      (vegetable) => vegetable.name === vegetableToSearch
    );
    let current = [...state.apiData.slice(index, index + 1)];    
    dispatch({type:CURRENT_VEG,payload:current})
    dispatch({type:SET_PAGE_VEG})
    
  }

  function handleDifficultyClick(e) {

    dispatch({type:USER_DIFFICULTY,payload:e.target.dataset.button})
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
    
    dispatch({type:SET_PAGE_VEG_LIST})
  }

  function handleVegetableClick(e) {
    console.log(e.target.dataset.button);

    const vegetableIndex = state.apiData.findIndex(
      (vegetable) => vegetable.name === e.target.dataset.button
    );

    let vegetable = [...state.apiData.slice(vegetableIndex, vegetableIndex + 1)];
    
    
    dispatch({type:SET_PAGE_VEG, payload:{vegetable}})
  }

  function handleQuestionClick() {
    
    dispatch({type:SET_PAGE_QUESTION})
  }

 
  if (state.currentPage === SET_PAGE_HOME) {
    pageToDisplay = (
      <HomePage
        options={options}
        // data={setApiData}<<this is not in use
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
        handleQuestionClick={handleQuestionClick}
      />
    )
  }

  if (state.currentPage === SET_PAGE_VEG) {
    pageToDisplay = (
      <VegetablePage
        currentVegetable={state.currentVegetable}
        handleHomeClick={handleHomeClick}
      />
    );
  }
  if (state.currentPage === SET_PAGE_QUESTION) {
    pageToDisplay = (
      <QuestionPage
        answers={answers}
        questionNumber='1'
        handleClick={handleDifficultyClick}
        currentQuestion={currentQuestion}
      />
    );
  }
  if (state.currentPage === SET_PAGE_VEG_LIST) {
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
