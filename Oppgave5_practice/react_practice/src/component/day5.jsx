//다양한 input 예시


import React, { useState } from 'react';


export default function Day5() {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [file, setFile] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  const [range, setRange] = useState(50);
  const [color, setColor] = useState('#ff0000');
  const [showModal, setShowModal] = useState(false); // 모달 상태 관리

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // 제출 시 모달 창 열기
  };

  const closeModal = () => {
    setShowModal(false); // 모달 닫기
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        
        <div>
          <label>Text:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div>
          <label>Number:</label>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        
        <div>
          <label>File:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        
        <div>
          <label>Checkbox:</label>
          <input type="checkbox" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
        </div>
        
        <div>
          <label>Range (slider):</label>
          <input type="range" value={range} onChange={(e) => setRange(e.target.value)} min="0" max="100" />
        </div>
        
        <div>
          <label>Color:</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      {/* 모달 창 */}
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h2>Form Submission</h2>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Text:</strong> {text}</p>
            <p><strong>Password:</strong> {password}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Number:</strong> {number}</p>
            <p><strong>File:</strong> {file ? file.name : 'No file selected'}</p>
            <p><strong>Checkbox:</strong> {checkbox ? 'Checked' : 'Not checked'}</p>
            <p><strong>Range:</strong> {range}</p>
            <p><strong>Color:</strong> {color}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// 모달 스타일
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  }
};

