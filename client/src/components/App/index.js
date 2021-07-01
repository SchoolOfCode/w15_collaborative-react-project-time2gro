import React, {useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import HomePage from '../HomePage';
import VegetablePage from '../VegetablePage';


function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isVegetablePage, setIsVegetablePage] = useState(false);
  function handleClick(){
    setIsHomePage(!isHomePage)
    setIsVegetablePage(!isVegetablePage)
  }
  let pageToDisplay 
  if (isHomePage === true){
    pageToDisplay = <HomePage/>
  }
  if (isVegetablePage === true){
    pageToDisplay = <VegetablePage/>
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      {pageToDisplay}
      <button onClick = {handleClick}>Change page</button>
    </div>
  );
}

export default App;
