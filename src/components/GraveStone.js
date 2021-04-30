import React from 'react';
import {
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

function GraveStone({ ...student }) {
  return (
    <div>
      <Card id="dead-card" body>
      <CardTitle tag="h5">{student.firstName} {student.lastName}</CardTitle>
      <CardText>RIP</CardText>
    </Card>
    </div>
  );
}

GraveStone.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default GraveStone;
