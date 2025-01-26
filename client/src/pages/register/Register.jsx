import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      const res = axios.post("http://localhost:3001/api/auth/register", inputs);
      console.log(res.then((res) => console.log(res)));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Bloggers</h1>
          <p>Bloggers, where bloggers can posts and comments on other posts</p>
          <span>Already have an account</span>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
