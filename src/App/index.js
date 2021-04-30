import React, { useState } from 'react';
import { Button } from 'reactstrap';
import GraveStone from '../components/GraveStone';
import LiveStudent from '../components/LiveStudent';
import {
  dearlyBeloved, followTheLight, livingStudents
} from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [aliveStudents, setAliveStudents] = useState(livingStudents());
  const [deadStudents, setDeadStudents] = useState(dearlyBeloved());

  const sharkAttack = () => {
    const [live, dead] = followTheLight();
    setAliveStudents(live);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <Button id="button" color="info"
      onClick={sharkAttack}
      >SHARK ATTACK</Button>
      <h2>SHARK TANK</h2>
      <div className="shark-tank">
      {aliveStudents.map((student) => (
        <LiveStudent
          key={student.id}
          {...student}
        />
      ))}
      </div>
      <h2>GRAVEYARD</h2>
      <div className="graveyard">
      {deadStudents.map((student) => (
        <GraveStone
          key={student.id}
          {...student}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
