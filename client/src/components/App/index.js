import React, { useState, useEffect, useReducer } from "react";
import HomePage from "../HomePage";
import VegetablePage from "../VegetablePage";
import QuestionPage from "../QuestionPage";
import VegetableListPage from "../VegetableListPage";

import logo from "../../logo.svg";
import {
  answersArray,
  difficultyLevel,
  answerDifficultyLevel,
  listHeading,
  listSubheading,
} from "../../utils/text";
import "./App.css";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_VEGETABLE_TO_SEARCH = "SET_VEGETABLE_TO_SEARCH";
const SET_API_DATA = "SET_API_DATA";
const SET_VEGETABLE_LIST = "SET_VEGETABLE_LIST";

// 1. replace any user State calls with a property in here
const initialState = {
  currentPage: "home",
  vegetableToSearch: "Tomatoes",
  apiData: [],
  vegetableList: [],
};

// 2. replace any setState with case and dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.value,
      };
    case SET_VEGETABLE_TO_SEARCH:
      return {
        ...state,
        vegetableToSearch: action.value,
      };
    case SET_API_DATA:
      return {
        ...state,
        apiData: action.value,
      };
      case SET_VEGETABLE_LIST:
        return {
          ...state,
          vegetableList: action.value,
        };
    default:
      return state;
  }
};

function App() {
 
  // Removed State as they do not change
  const answers = answersArray;
  const currentQuestion = "";

   // Replace these above
  // Parameter 1 goes into inital State, 2 goes into reducer
  const [currentVegetable, setCurrentVegetable] = useState({});
  const [userDifficulty, setUserDifficulty] = useState("");

  // const [selectDifficulty, setSelectDifficulty] = useState(
  //   answerDifficultyLevel);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPage, vegetableToSearch, apiData, vegetableList } = state;

  useEffect(() => {
    async function fetchVegetable() {
      const requestUrl = await fetch(
        `http://harvesthelper.herokuapp.com/api/v1/plants/?api_key=4de690f753b6820340d5b208a800a214`
      );
      const dataResponse = await requestUrl.json();
      console.log(dataResponse);
      dispatch({ type: SET_API_DATA, value: dataResponse });
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

  function setCurrentPage(page) {
    dispatch({ type: SET_CURRENT_PAGE, value: page });
  }

  function handleHomeClick() {
    setCurrentPage("home");
  }

  function handleChange(vegetable) {
    dispatch({ type: SET_VEGETABLE_TO_SEARCH, value: vegetable.value });
  }

  function handleSearchClick() {
    const index = apiData.findIndex(
      (vegetable) => vegetable.name === vegetableToSearch
    );

    let current = [...apiData.slice(index, index + 1)];

    setCurrentVegetable(current);
    setCurrentPage("vegetable");
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
    dispatch({ type: SET_VEGETABLE_LIST, value: vegetables });
    setCurrentPage("vegetable list");
  }

  function handleVegetableClick(e) {
    console.log(e.target.dataset.button);

    const vegetableIndex = apiData.findIndex(
      (vegetable) => vegetable.name === e.target.dataset.button
    );

    let vegetable = [...apiData.slice(vegetableIndex, vegetableIndex + 1)];
    setCurrentVegetable(vegetable);
    setCurrentPage("vegetable");
  }

  function handleQuestionClick() {
    setCurrentPage("question");
  }

  let pageToDisplay;
  if (currentPage === "home") {
    pageToDisplay = (
      <HomePage
        options={options}
        handleChange={handleChange}
        handleSearchClick={handleSearchClick}
        handleQuestionClick={handleQuestionClick}
      />
    );
  }
  if (currentPage === "vegetable") {
    pageToDisplay = (
      <VegetablePage
        currentVegetable={currentVegetable}
        handleHomeClick={handleHomeClick}
      />
    );
  }
  if (currentPage === "question") {
    pageToDisplay = (
      <QuestionPage
        answers={answers}
        questionNumber="1"
        handleClick={handleDifficultyClick}
        currentQuestion={currentQuestion}
      />
    );
  }
  if (currentPage === "vegetable list") {
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
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">{pageToDisplay}</div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
