import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SalesIndex from './SalesIndex';
import SalesForm from './SalesForm';
import SalesDisplay from './SalesDisplay';

const SalesTab = () => (
  <Row>
    <Col md={6}>
      <SalesIndex />
    </Col>
    <Col md={6}>
      <SalesForm />
      <SalesDisplay />
    </Col>
  </Row>
);

export default SalesTab;
