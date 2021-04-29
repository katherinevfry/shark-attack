import React from 'react';
import {
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

function LiveStudent({ ...student }) {
  return (
    <div>
      <Card id="card" body>
      <CardTitle tag="h5">{student.firstName} {student.lastName}</CardTitle>
      <CardText>status: alive</CardText>
    </Card>
    </div>
  );
}

LiveStudent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default LiveStudent;
