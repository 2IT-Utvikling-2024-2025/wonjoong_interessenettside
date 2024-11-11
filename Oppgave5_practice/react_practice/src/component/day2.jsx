
//시계

import React, { useState, useEffect } from 'react';

export default function Day2() {
  

  const [dateTime, setDateTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
    dayOfWeek: "",
    day: "",
    month: "",
    year: ""
  });

  useEffect(() => {
    const updateTime = () => {
      const currentDate = new Date();
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const monthsOfYear = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];

      setDateTime({
        hours: currentDate.getHours().toString().padStart(2, "0"),
        minutes: currentDate.getMinutes().toString().padStart(2, "0"),
        seconds: currentDate.getSeconds().toString().padStart(2, "0"),
        dayOfWeek: daysOfWeek[currentDate.getDay()],
        day: currentDate.getDate(),
        month: monthsOfYear[currentDate.getMonth()],
        year: currentDate.getFullYear()
      });
    };

    // 시간 업데이트
    const intervalId = setInterval(updateTime, 1000); // 1초마다 업데이트

    // 컴포넌트가 언마운트될 때 인터벌을 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Current Date and Time</h2>
      <p>
        {dateTime.dayOfWeek}, {dateTime.day} {dateTime.month} {dateTime.year}
      </p>
      <p>
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </p>
    </div>
  );
}

//시계만

/* const [time, setTime] = useState(new Date());


  // useEffect를 사용하여 매 초마다 시간을 업데이트
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // 1초마다 업데이트

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timerId);
  }, []);

  // 시간 포맷팅 함수
  const formatTime = (date) => {
    return date.toLocaleTimeString(); // 사용자의 로케일에 맞는 시간 형식으로 변환
  };

  return (
    <div >
      <h1 >{formatTime(time)}</h1>
    </div>
  );
 */

