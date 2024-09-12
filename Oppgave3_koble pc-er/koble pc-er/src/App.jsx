import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DOC from './doc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DOC/>
    </>
  )
}

export default App
