import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SIGNUP_URL } from "../../api/constants";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

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

  const onSubmit = async () => {
    const {
      data: { success, message },
    } = await axios.post(SIGNUP_URL, {
      firstName,
      lastName,
      email,
      password,
    });

    if (success) {
      setRegistrationSuccess(true);
    }

    setStatusMessage(message);
  };

  return (
    <>
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChange}
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={onLastNameChange}
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={onEmailChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-Dark btn-block"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right"></p>
      </form>
      {statusMessage && <small>{statusMessage}</small>}
      <div>
        {registrationSuccess && <Link to="/login">Go to login here!</Link>}
      </div>
    </>
  );
};

export default Signup;
