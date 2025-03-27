import { useState } from "react"

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

  function handleChange(inputIndentifier, newValue){
      setUserInput(prevUserInput => {
          return{
              ...prevUserInput,
              [inputIndentifier]: +newValue,
          }
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid &&  (
        <p className="center">Please enter a valid duration!</p>
      )}
      {inputIsValid &&  <Results input={userInput} />}
      {/*Results do here */}
    </>
  )
}

export default App
