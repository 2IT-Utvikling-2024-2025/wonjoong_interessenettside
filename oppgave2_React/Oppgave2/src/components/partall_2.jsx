import { useState } from "react"

export default function Partall_2(){


    const[inn,setInn]= useState()
    const [num,setNum] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        setNum("Hei")

        
         
    }

    return(


        <>
        

        <input type="submit" value={""}/>
        <p>text: {num}</p>

        </>
    )
}
