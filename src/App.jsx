import { useState } from "react";
import Header from "./Header"
import  UserInput from "./UserInput"
import Results from "./Results"

function App() {
  const [userInput,setUserInput] =useState({
    initialInvestment:"",
    annualInvestment:"",
    expectedReturn:"",
    duration:"",
   });

   function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput =>{
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue
        };
    });
}

const inputIsValid = userInput.duration >=1 ;

  return (
    <>
   <Header />
   <UserInput 
   onChange={handleChange}
   userInput={userInput}/>
   {inputIsValid ? <Results userInput={userInput} /> : 
   <p className="center">Please enter a duration greater than zero</p> }
   </>
  )
}

export default App
