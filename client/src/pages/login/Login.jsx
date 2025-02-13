import { useState } from "react";
import "./login.scss";
import "./LoginValidation";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newUser = axios
        .post("http://localhost:3001/api/auth/login", values)
        .then((res) => console.log(res));
      navigate("/");
      return newUser;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bloggers</h1>
          <p>Bloggers, where bloggers can posts and comments on other posts</p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Sign up!</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
