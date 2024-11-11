// 해야할것 종합본,compnents
import React, { useState, useEffect } from 'react';
import './day1.css'

// ChildComponent는 부모로부터 전달된 데이터를 props로 받아 표시합니다.
function ChildComponent({ greeting, selectedOption, birthDate }) {
  return (
    <div>
      <h2>Results:</h2>
      <p>{greeting}</p>
      <p>Selected Option: {selectedOption}</p>
      <p>Birth Date: {birthDate}</p>
    </div>
  );
}

export default function Day1() {
  // useState를 사용해 상태값을 관리합니다.
  const [name, setName] = useState('');
  const [option, setOption] = useState('');
  const [date, setDate] = useState('');
  const [greeting, setGreeting] = useState('');
  const [showResults, setShowResults] = useState(false); // 결과를 보여줄지 결정하는 상태

  // useEffect를 사용해 name 값이 변경될 때마다 인사 메시지를 업데이트합니다.
  useEffect(() => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting('');
    }
  }, [name]);

  // 버튼 클릭 시 결과를 보여주도록 설정
  const handleNext = () => {
    setShowResults(true);
  };

  return (
    <div>
      <h1>React Combined Example</h1>

      {/* 입력 필드: 텍스트 입력 */}
      <div>
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* 입력 필드: 라디오 버튼 */}
      <div>
        <label>Choose an option:</label>
        <input
          type="radio"
          value="Option 1"
          checked={option === 'Option 1'}
          onChange={() => setOption('Option 1')}
        /> Option 1
        <input
          type="radio"
          value="Option 2"
          checked={option === 'Option 2'}
          onChange={() => setOption('Option 2')}
        /> Option 2
      </div>

      {/* 입력 필드: 날짜 */}
      <div>
        <label>Select your birth date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Next 버튼 */}
      <button onClick={handleNext}>Next</button>

      {/* 버튼을 누른 후에만 결과를 표시 */}
      {showResults && (
        <ChildComponent
          greeting={greeting}
          selectedOption={option}
          birthDate={date}
        />
      )}
    </div>
  );
}




// 부모 컴포넌트
/* export default function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      { ChildComponent에 message를 props로 전달 }
      <ChildComponent message={message} />
    </div>
  );
}

// 자식 컴포넌트
function ChildComponent(props) {
  return (
    <div>
      <h2>자식 컴포넌트</h2>
      {부모로부터 받은 props.message를 사용 }
      <p>{props.message}</p>
    </div>
  );
}
 */