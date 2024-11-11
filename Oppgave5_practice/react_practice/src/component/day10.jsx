//폰트개수 확인 


import { useState } from "react";

export default function CharacterCounter() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [message,setMessage]= useState("")

  const handleChange = (e) => {

    const value = e.target.value;
    setInput(value);
    setCount(Number(input.length))



   


    }


    const handleClick=()=>{
        if(count>10){

            setMessage("tallet er større enn 10")
        }

        else{
            setMessage("tallet er mindre enn 10")
        }



    }
  

  return (
    <div>
     
      <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
        placeholder="skriv tekst" 
      />
      <button onClick={handleClick}>click this</button>
      <h1> {message} </h1>
      

      
    </div>
  );
}
