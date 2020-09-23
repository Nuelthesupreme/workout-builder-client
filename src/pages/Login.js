import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserContext from "../context/UserContext";
import { BASE_URL } from "../api/constants";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      setUser(data);

      //Local Storage, this persists the user's email and token
      const { token } = data;
      const user = { email, token };
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to the homepage.
      history.push("./homepage");
    } catch (error) {
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <Row className="mt-4">
      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={onSubmit}>
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
      </Col>
    </Row>
  );
};

export default Login;
