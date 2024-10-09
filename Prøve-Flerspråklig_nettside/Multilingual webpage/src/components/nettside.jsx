

import React, { useState } from 'react';
import './nettside.css'
import Img from './picture/logo.jpg'



export default function Nettside(){




    


    const [explonation, setExplonation]=useState("The language is english")
    const [temp, setTemp]=useState("14°C")
    const [weather,setWeather]=useState("It's raining in the USA right now  ")
    const [rate, setRate]=useState("")


   

    const handleClick= () => {



    }


    const engelsk = () => {
        setExplonation("The language is english")
        setWeather("It's raining in the USA right now  ")
        setTemp("The current temperature is 14°C")
        };
      const norsk = () => {
        setExplonation("språket er norsk")
        setWeather("Det snør i Norge nå  ")
        setTemp("Dagens temperatur er 2°C")
      };
      const spanish = () => {
        setExplonation("El idioma es coreano.")
        setWeather("El sol brilla ahora en España ")
        setTemp("La temperatura actual es de 24°C")
         };
      const koreansk = () => {
        setExplonation("언어가 한국어다")
        setWeather("지금 한국에서는 먹구름이 껴있다")
        setTemp("현재 온도는 10°C")
           };



           const [tall, setTall] = useState(0)
           const [result, setResult] = useState("")
       
           const handleMultiply = (e) => {
                
               e.preventDefault()
               setResult(tall*10)
       
             };
    

             
        
    return(

        <>

        <div className='header'>

            <img src={Img} alt="logo-pic" />

        </div>
        <div className='innhold'>

        <div className='language'>
        <button onClick={engelsk}>english</button>
        <button onClick={norsk} >norsk</button>
        <button onClick={spanish} > español</button>
        <button onClick={koreansk} >한국어</button>

        </div>

        
        
        <h1>{explonation}</h1>
        <br />
        <h1>{weather}</h1>
        <br />
        <h1>{temp}</h1>
        
        </div>

        


        


        <form onSubmit={handleMultiply}>
                <label>

                    <input
                        className='put'
                        type="text"
                        value={tall}
                        onChange={(e) => setTall(Number(e.target.value))}

                    />
                    

                    <button onClick={handleClick}>click this</button>

                </label>
            </form>
            <h2>{result}</h2>


            <div className='footer'>

        <p>© 2024 wonjoong. All rights reserved.</p>


        </div>

        </>
    )
}