import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import ChatTab from './ChatTab';
import LegalTab from './LegalTab';
import SalesTab from './SalesTab';


const App = () => {
  const [userData, setUserData] = useState({ name: '', gender: '' });

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <Router>
      <Container>
        <Form onSubmit={handleUserSubmit}>
          <Form.Group controlId="formUserName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" value={userData.name} onChange={handleUserChange} />
          </Form.Group>
          <Form.Group controlId="formUserGender">
            <Form.Label>Género</Form.Label>
            <Form.Control type="text" name="gender" value={userData.gender} onChange={handleUserChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar Usuario
          </Button>
        </Form>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Mi Aplicación</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/chats">Chats</Nav.Link>
            <Nav.Link as={Link} to="/legal">Legales</Nav.Link>
            <Nav.Link as={Link} to="/sales">Ventas</Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/chats" />} />
          <Route path="/chats" element={<ChatTab />} />
          <Route path="/legal" element={<LegalTab />} />
          <Route path="/sales" element={<SalesTab />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
