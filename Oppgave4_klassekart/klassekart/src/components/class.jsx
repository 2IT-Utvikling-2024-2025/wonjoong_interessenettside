import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './class.css';

export default function Class() {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/classes/${id}`);
        
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setClassData(data);  
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchClassData();
  }, [id]);

  if (loading) {
    return <p>kommer</p>;
  }

  if (error) {
    return <p>Feil: {error}</p>;
  }

  return (
    <div className="class-info">
      <h2>elever i klassen {classData.name}</h2>
      <div className="student-list">
        {classData.students.map((student) => (
          <div key={student.id} className="student-card">
            <Link 
              to={`/student/${student.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="student-link"
            >
              <h4>{student.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
