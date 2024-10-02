import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const LegalForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('legalData', JSON.stringify(formData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formLegalInput1">
        <Form.Label>Input 1</Form.Label>
        <Form.Control type="text" name="input1" onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formLegalInput2">
        <Form.Label>Input 2</Form.Label>
        <Form.Control type="text" name="input2" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default LegalForm;
