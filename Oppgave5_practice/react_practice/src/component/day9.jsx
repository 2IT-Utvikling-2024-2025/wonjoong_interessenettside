//input 기초

import { useState } from "react"

export default function Day9(){


const[input,setInput]=useState("")
const[result,setResult]=useState("")

const handleChange=(e)=>{
    setInput(e.target.value)
    
}

const handleClick=()=>{

    setResult(input)
}

return(
    <>
    <input type="text" value={input} onChange={handleChange}/>
    <button onClick={handleClick}>click me</button>
    <h2>{result}</h2>
    </>
)

}