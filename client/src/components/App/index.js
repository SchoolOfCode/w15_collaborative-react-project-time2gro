import React, { useState, useEffect } from 'react';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';

import logo from '../../logo.svg';
import './App.css';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isVegetablePage, setIsVegetablePage] = useState(false);
  const [vegetableToSearch, setVegetableToSearch] = useState('');
  const [apiData, setApiData] = useState([]);
  const [currentVegetable, setCurrentVegetable] = useState({});
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
    // set current vegetable to be the vegetableToSearch
    const current = apiData.find(
      (vegetable) => vegetable.name === vegetableToSearch
    );

    setCurrentVegetable(current);
    setIsHomePage(false);
    setIsVegetablePage(true);
  }

  let pageToDisplay;
  if (isHomePage === true) {
    pageToDisplay = (
      <HomePage
        handleSearch={handleSearch}
        inputValue={vegetableToSearch}
        handleSearchClick={handleSearchClick}
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

  return <div className='App'>{pageToDisplay}</div>;
}

export default App;
