import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { LOGIN_URL } from "../../api/constants";
import "./login.css";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    try {
      const { data } = await axios.post(LOGIN_URL, {
        email,
        password,
      });

      const { token } = data;

      setUser({ email, token });
    } catch (error) {
      if (error.response.data.message) {
        setStatusMessage(error.response.data.message);
      } else {
        setStatusMessage("Something went wrong with our servers!");
      }
    }
  };

  return (
    <>
      <form>
        <h3>Login</h3>

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

        <Link to="/homepage">
          <button onClick={onSubmit} className="btn btn-Dark btn-block">
            Submit
          </button>
        </Link>
      </form>
      {statusMessage && <small>{statusMessage}</small>}
    </>
  );
};

export default Login;
