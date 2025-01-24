import "./login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bloggers</h1>
          <p>Bloggers, where bloggers can posts and comments on other posts</p>
          <span>Don't have an account?</span>
          <button>Sign up!</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
