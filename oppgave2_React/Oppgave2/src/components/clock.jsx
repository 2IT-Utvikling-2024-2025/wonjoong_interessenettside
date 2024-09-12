import { useEffect, useState } from "react"

export default function digitalClock(){

    const [time, setTime ] = useState(new Date());
useEffect(()=>{
    const i = setInterval(() => {
            setTime(new Date())
    }, 1000);
    return() => {
        clearInterval(i);
    }

},[]);

    return(
    
    
        <span>00:00:00</span>


    )
}