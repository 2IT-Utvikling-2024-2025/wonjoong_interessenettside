



import React, { Component } from "react";
import Guyam from "react-explode/Guyam";
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [time, setTime] = useState(3);
  const [showGuyam,setShowGuyam] = useState(false);


  useEffect(() => {
    

    const myinterval = setInterval(() => {

      /* setTime(new Date()); */
      if (time==0){
        setTimeout(() => {
          setTime(3)
        }, 300)

      }
      else{

        setTime(time-1)
      }

    }, 1000);

    return () => clearInterval(myinterval);
  }, [time]);

 

  return (
    <>
      <div className='header'>
      </div>

      <div className='middle'>

        {/* {time.toLocaleTimeString('en-US')} */}
        
        
        
        
          {time == 0 ? (
            <Guyam size="400" delay={0} repeatDelay={0} repeat={1} />
          ) : (
            <h1>{time}</h1>
          )}
        
      
      </div>

      <div className='footer'>
      </div>
    </>
  )
  
}
