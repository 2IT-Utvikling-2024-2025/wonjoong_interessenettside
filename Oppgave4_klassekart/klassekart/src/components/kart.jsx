import { useState, useEffect } from "react";
import './kart.css';
import { Link } from 'react-router-dom';

export default function Kart() {
  const [classes, setClasses] = useState([]);
  
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/classes");
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Kan ikke hente klasseinformasjon", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="kart">
      <h2>Velg en klasse</h2>
      <div className="class-list">
        {classes.map((cls) => (
          <div key={cls.id} className="class-card">
            <Link 
              to={`/class/${cls.id}`} 
              className="class-link"
            >
              <h4>{cls.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
