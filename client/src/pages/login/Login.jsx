import { useState, useContext } from "react";
import "./login.scss";
import "./LoginValidation";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/authContext";
import Home from "../home/Home.jsx";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(values);
      navigate("/home");
    } catch (err) {
      setErr(err.response.data);
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
