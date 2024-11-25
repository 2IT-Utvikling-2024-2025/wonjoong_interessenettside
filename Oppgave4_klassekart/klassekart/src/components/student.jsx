import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './student.css'

export default function Student() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/students/${id}`);
        
        const data = await response.json();
        setStudent(data); 
        setLoading(false); 
      } catch (error) {
        setError(error.message);
        setLoading(false); 
      }
    };

    fetchStudent(); 
  }, [id]);

  if (loading) {
    return <p>kommer</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="student-info">
      <h2>Informasjon om {student.name}</h2>
      <p>Navn: {student.name}</p>
      <p>Alder: {student.age}</p>
    </div>
  );
}
