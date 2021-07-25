import React, { useState, useEffect, useReducer } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';
import QuestionPage from '../QuestionPage';
import VegetableListPage from '../VegetableListPage';

// logo was not in use so removed
import {
  answersArray,
  difficultyLevel,
  answerDifficultyLevel,
  listHeading,
  listSubheading,
} from '../../utils/text';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [vegetableToSearch, setVegetableToSearch] = useState('Tomatoes');
  const [apiData, setApiData] = useState([]);
  const [currentVegetable, setCurrentVegetable] = useState({});
  const [answers, setAnswers] = useState(answersArray);
  const [userDifficulty, setUserDifficulty] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(difficultyLevel);
  // 'setSelectDifficulty' is assigned a value but never used
  const [selectDifficulty, setSelectDifficulty] = useState(
    answerDifficultyLevel
  );
  const [vegetableList, setVegetableList] = useState([]);

//   const initialState={
//     currentPage: "home",
//     vegetableToSearch: "Tomatoes",
//     apiData: [],
//     currentVegetable:{},
//     answers: answersArray,
//     userDifficulty:"",
//     currentQuestion:difficultyLevel,
//     selectDifficulty:answerDifficultyLevel,
//     vegetableList:[],
// }
  
//   const [state, dispatch]= useReducer(reducer,initialState);
  
//   function reducer(state, action){
//     // eslint-disable-next-line default-case
//     switch(action){
//       case currentPage: ""
//     return "";
//     }

//   }
  
  
  
  
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
    setCurrentPage('home');
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
    setCurrentPage('vegetable');
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
    setCurrentPage('vegetable list');
  }

  function handleVegetableClick(e) {
    console.log(e.target.dataset.button);

    const vegetableIndex = apiData.findIndex(
      (vegetable) => vegetable.name === e.target.dataset.button
    );

    let vegetable = [...apiData.slice(vegetableIndex, vegetableIndex + 1)];
    setCurrentVegetable(vegetable);
    setCurrentPage('vegetable');
  }

  function handleQuestionClick() {
    setCurrentPage('question');
  }

  let pageToDisplay;
  if (currentPage === 'home') {
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
  if (currentPage === 'vegetable') {
    pageToDisplay = (
      <VegetablePage
        currentVegetable={currentVegetable}
        handleHomeClick={handleHomeClick}
      />
    );
  }
  if (currentPage === 'question') {
    pageToDisplay = (
      <QuestionPage
        answers={answers}
        questionNumber='1'
        handleClick={handleDifficultyClick}
        currentQuestion={currentQuestion}
      />
    );
  }
  if (currentPage === 'vegetable list') {
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
