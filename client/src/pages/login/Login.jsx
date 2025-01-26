import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const handleChange = (e) => {};
  const handleLogin = () => {};
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bloggers</h1>
          <p>Bloggers, where bloggers can posts and comments on other posts</p>
          <span>Don't have an account?</span>
          <Link to="/Register">
            <button>Sign up!</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
