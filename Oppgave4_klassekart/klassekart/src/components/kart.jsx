import { useState } from "react";
import './kart.css';

export default function Kart() {
  const [selectedStudent, setSelectedStudent] = useState(null); // 선택된 학생 정보

  const students = [
    { id: 1, name: "Wonjoong", age: 17 },
    { id: 2, name: "Bjørn", age: 18 },
    { id: 3, name: "Ali", age: 16 },
    { id: 4, name: "Lee", age: 18 },
    { id: 5, name: "Felix", age: 16 },
    { id: 6, name: "Alexander", age: 18 },
    { id: 7, name: "Theo", age: 16 },
    { id: 8, name: "Christoper", age: 19 },
  ];

  const handleStudentClick = (student) => {
    setSelectedStudent(student); // 클릭된 학생 정보 설정
  };

  return (
    <>
      <div className="text">
        <div className="main-1">
          <Group students={students.slice(0, 4)} onStudentClick={handleStudentClick} />
        </div>
        <div className="main-2">
          <Group students={students.slice(4)} onStudentClick={handleStudentClick} />
        </div>
      </div>
      {selectedStudent && (
        <div className="student-info">
          <h3>info</h3>
          <p>name: {selectedStudent.name}</p>
          <p>age: {selectedStudent.age}</p>
        </div>
      )}
    </>
  );
}

function Group({ students, onStudentClick }) {
  return (
    <div className="group">
      {students.map((student) => (
        <div 
          key={student.id} 
          className="student-card" 
          onClick={() => onStudentClick(student)} // 클릭 시 학생 정보 표시
        >
          <h4>{student.name}</h4>
        </div>
      ))}
    </div>
  );
}