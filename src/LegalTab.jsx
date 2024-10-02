import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LegalIndex from './LegalIndex';
import LegalForm from './LegalForm';
import LegalDisplay from './LegalDisplay';

const LegalTab = () => (
  <Row>
    <Col md={6}>
      <LegalIndex />
    </Col>
    <Col md={6}>
      <LegalForm />
      <LegalDisplay />
    </Col>
  </Row>
);

export default LegalTab;
