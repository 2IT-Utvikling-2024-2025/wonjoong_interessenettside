// 선생님 코드 = 카운트다운

import React, { useState, useEffect } from 'react';

export default function Day3(){


    const [time, setTime] = useState(10);

  useEffect(() => {

    const myinterval = setInterval(() => {

      if (time == 0) {
        //Explosion
        setTime(10)
      } else {
        setTime(time - 1);
      }

    }, 1000); 

    return () => clearInterval(myinterval);

  }, [time]);
 

  return (
    <>
      <div className='header'>
      </div>

      <div className='middle'>

        <h1>{time}</h1>
      
      </div>

      <div className='footer'>
      </div>
    </>
  )
}