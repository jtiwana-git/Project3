import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const [err, setErr] = useState(null);

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios
        .post("http://localhost:3001/api/auth/register", values)
        .then((res) => console.log(res));
      navigate("/login");
      return newUser;
    } catch (err) {
      setErr(err);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInput}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            <input
              type="name"
              placeholder="Name"
              name="name"
              onChange={handleInput}
            />
            {err && <span style={{ color: "red" }}>Something went wrong</span>}
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Bloggers</h1>
          <p>Bloggers, where bloggers can posts and comments on other posts</p>
          <span>Already have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
