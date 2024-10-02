import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ChatDisplay from './ChatDisplay';

const ChatOptions = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [formData, setFormData] = useState({});

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('chatData', JSON.stringify(formData));
  };

  return (
    <>
      <Form.Group controlId="formChatOptions">
        <Form.Label>Opciones de Chat</Form.Label>
        <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
          <option value="option1">Opción 1</option>
          <option value="option2">Opción 2</option>
          <option value="option3">Opción 3</option>
          <option value="option4">Opción 4</option>
        </Form.Control>
      </Form.Group>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formChatInput1">
          <Form.Label>Input 1</Form.Label>
          <Form.Control type="text" name="input1" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formChatInput2">
          <Form.Label>Input 2</Form.Label>
          <Form.Control type="text" name="input2" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <ChatDisplay />
    </>
  );
};

export default ChatOptions;
