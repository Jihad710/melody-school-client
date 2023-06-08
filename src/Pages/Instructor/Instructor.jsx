import { useEffect, useState } from "react";
import InstructorItem from "../Shared/InstructorItem/InstructorItem";


const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/instructor') 
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  return (
    <div>
        <h1 className="text-4xl text-bold text-center mb-5">“Music is everybody’s possession. It’s only publishers who think that people own it.”</h1>
    
    <div>
        
      {instructors.map(item => (
        <InstructorItem key={item._id} item={item} />
      ))}
    </div>
    </div>
  );
};

export default Instructor;
