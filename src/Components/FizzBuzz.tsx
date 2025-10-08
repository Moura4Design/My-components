import React from "react";

const FizzBuzz = () => {
  const fizzBuzzArray = []; 

  for(let i = 1; i <= 10; i++){
    if(i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push("FizzBuzz"); 
    } else if(i % 3 === 0) {
      fizzBuzzArray.push('Fizz')
    } else if(i % 5 === 0) {
      fizzBuzzArray.push("Buzz")
    } else {
      fizzBuzzArray.push(i)
    }
  }


  return(
    <div>
      <h2>Fizz Buzz React puro</h2>
      {fizzBuzzArray.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default FizzBuzz;