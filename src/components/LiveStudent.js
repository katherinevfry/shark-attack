import React from 'react';
import {
  Card,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import fishy from '../fishy2.png';

function LiveStudent({ ...student }) {
  return (
    <div>
      <Card id="live-card" style={{ backgroundImage: `url(${fishy})` }} body>
      <CardTitle id="fish-name" tag="h5">{student.firstName} {student.lastName}</CardTitle>
    </Card>
    </div>
  );
}

LiveStudent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default LiveStudent;
