import { useState } from 'react'
import './App.css'
import Day1 from './day1'
import Day2 from './day2'
import Day3 from './day3'
import Day4 from './day4'
import Day5 from './day5'
import Day6 from './day.6'
import Day7 from './day7'
import Day8 from './day8'
import Day9 from './day9'
import Day10 from './day10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Day1/>
      <Day2/>
      <Day3/>
      <Day4/>
      <Day5/>
      <Day6/>
      <Day7/>
      <Day8/>
      <Day9/>
      <Day10/>
      
    </>
  )
}

export default App
