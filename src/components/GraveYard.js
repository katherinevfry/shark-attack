import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

export default function GraveYard({ deadStudents }) {
  return (
    <div>
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

GraveYard.propTypes = {
  deadStudents: PropTypes.array
};
