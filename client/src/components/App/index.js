import React, { useState, useEffect } from "react";
import HomePage from "../HomePage";
import VegetablePage from "../VegetablePage";

import logo from "../../logo.svg";
import "./App.css";

function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isVegetablePage, setIsVegetablePage] = useState(true);
  const [vegetableToSearch, setVegetableToSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  useEffect(()=> {
    async function fetchVegetable(){
      const requestUrl = await fetch (`http://harvesthelper.herokuapp.com/api/v1/plants/?api_key=4de690f753b6820340d5b208a800a214`);
      const dataResponse = await requestUrl.json();
      setApiData(dataResponse);
      // console.log (dataResponse)
    }
    fetchVegetable()
  },[])

  function handleHomeClick() {
    setIsHomePage(!isHomePage);
    setIsVegetablePage(!isVegetablePage);
  }

  function handleSearch(event) {
    setVegetableToSearch(event.target.value);
  }

  let pageToDisplay;
  if (isHomePage === true) {
    pageToDisplay = <HomePage handleSearch={handleSearch} />;
  }
  if (isVegetablePage === true) {
    pageToDisplay = <VegetablePage handleHomeClick={handleHomeClick} />;
  }


  
  return (
    <div className="App">
      <h1>Hello</h1>
      {pageToDisplay}
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
