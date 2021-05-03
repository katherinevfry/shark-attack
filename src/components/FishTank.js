import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

export default function FishTank({ aliveStudents }) {
  return (
    <div>
      <h2>SHARK TANK</h2>
      <div className="shark-tank">
      {aliveStudents.map((student) => (
        <LiveStudent
          key={student.id}
          {...student}
        />
      ))}
      </div>
    </div>
  );
}

FishTank.propTypes = {
  aliveStudents: PropTypes.array
};
