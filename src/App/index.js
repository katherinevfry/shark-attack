import React, { useState } from 'react';
import { Button } from 'reactstrap';
import FishTank from '../components/FishTank';
import GraveYard from '../components/GraveYard';
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
      <h1>SHARK ATTACK</h1>
      <div className="buttonDiv">
        <Button id="button" color="info"
        onClick={sharkAttack}
        >SHARK ATTACK</Button>
      </div>

      <div className='appContainer'>
        <FishTank aliveStudents={aliveStudents}/>
        <GraveYard deadStudents={deadStudents}/>
      </div>
    </div>
  );
}

export default App;
