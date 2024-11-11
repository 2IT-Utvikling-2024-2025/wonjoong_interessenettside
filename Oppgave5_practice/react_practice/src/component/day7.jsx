//react 과제2


import { useState } from "react"

export default function Day7(){


    const[first,setFirst]=useState(Array.from({ length: 1 }, () => Math.floor(Math.random() * 10 + 1)))
    const[second,setSecond]=useState(Array.from({ length: 1 }, () => Math.floor(Math.random() * 10 + 1)))
    const[summ,setSumm]=useState()




    const handleClick= ()=>{

        const sum = Number(first)+Number(second)
        const bothEven = first % 2 === 0 && second % 2 === 0;

        if (sum >= 10) {
            alert(bothEven ? "begge to er partaller og summen er større enn 10" : "summen er større enn 10");
          } else if (bothEven) {
            alert("begge to er partaller og summen er mindre enn 10");
          }
      
    // " A ? B : C " 일때 A가 사실이면 B출력, 거짓이면 C출력
          setSumm(sum);
        
    }



    return(


        <>
        <h2>tallet er {first} </h2>
        <h2>tallet er {second} </h2>

        <button onClick={handleClick}>klikk dette </button>
        <h1>summen er {summ} </h1> 
        
        </>
    )
}