//과제1

import { useState } from "react";

export default function Day6() {
  const generateRandomNumbers = () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100 + 1));

  const checkOddEven = num => (num % 2 === 0 ? "partall" : "oddetall");

  const [numbers, setNumbers] = useState([]);
  const [results, setResults] = useState([]);

  const handleClick = () => {
    const newNumbers = generateRandomNumbers();
    setNumbers(newNumbers);
    setResults(newNumbers.map(checkOddEven));
  };

  return (
    <>
      <button onClick={handleClick}>klikk meg</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>
            {num} er {results[index]}
          </li>
        ))}
      </ul>
    </>
  );
}

