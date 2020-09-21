import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BASE_URL } from "../api/constants";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { message, success },
      } = await axios.post(`${BASE_URL}/auth/register`, {
        firstName,
        lastName,
        email,
        password,
      });

      if (success) {
        setMessage(message);
      } else {
        setError(message);
      }
    } catch (error) {
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <Row className="mt-4">
      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              onChange={onFirstNameChange}
              value={firstName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              onChange={onLastNameChange}
              value={lastName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={onEmailChange}
              value={email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onPasswordChange}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {error ? (
          <Alert className="my-3" variant="danger">
            {error}
          </Alert>
        ) : null}
        {message ? (
          <Alert className="my-3 text-center" variant="primary">
            <p>{message}</p>
            <Link to="/login">Go to login page</Link>
          </Alert>
        ) : null}
      </Col>
    </Row>
  );
};

export default Register;
