import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [role, setRole] = useState(''); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') setRole(value);
    else if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phone') setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!'); 
    navigate('/'); 
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Control
            as="select"
            name="role"
            value={role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="donor">Donor</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formName" className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
