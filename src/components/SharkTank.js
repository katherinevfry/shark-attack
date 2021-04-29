import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ aliveStudents }) {
  return (
    <div>
      {aliveStudents.map((student) => (
        <LiveStudent
          key={student.id}
          {...student}
        />
      ))}
    </div>
  );
}

SharkTank.propTypes = {
  aliveStudents: PropTypes.array
};

export default SharkTank;
