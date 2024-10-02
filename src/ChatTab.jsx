import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ChatIndex from './ChatIndex';
import ChatOptions from './ChatOptions';

const ChatTab = () => (
  <Row>
    <Col md={6}>
      <ChatIndex />
    </Col>
    <Col md={6}>
      <ChatOptions />
    </Col>
  </Row>
);

export default ChatTab;
