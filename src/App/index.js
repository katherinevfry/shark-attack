import React, { useState, useEffect } from 'react';
import SharkTank from '../components/SharkTank';
import {
  dearlyBeloved, livingStudents, students
} from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [aliveStudents, setAliveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setAliveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  console.warn(students, 'These are alive', aliveStudents, deadStudents);

  return (
    <div className='App'>
      <h2>SHARK TANK</h2>
      <SharkTank
      aliveStudents={aliveStudents}
      />
    </div>
  );
}

export default App;
