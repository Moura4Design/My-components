import React from "react";

const FizzBuzzTypescript: React.FC = () => {
  const fizzBuzzArray: (string | number)[] = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzArray.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzArray.push("Buzz");
    } else {
      fizzBuzzArray.push(i);
    }
  }

  return (
    <div>
      <h1>FizzBuzz TypeScript</h1>
      <ul>
        {fizzBuzzArray.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzzTypescript;