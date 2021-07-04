import React, { useState } from "react";
import HomePage from "../HomePage";
import VegetablePage from "../VegetablePage";

import logo from "../../logo.svg";
import "./App.css";

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isVegetablePage, setIsVegetablePage] = useState(true);
  const [vegetableToSearch, setVegetableToSearch] = useState("");

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
