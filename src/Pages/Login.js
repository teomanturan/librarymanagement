import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://private-c20e72-librarymanagement.apiary-mock.com/usercredentials"
      );

      const users = response.data.UserCredentials;
      const user = users.find(
        (u) => u.Username === username && u.Password === password
      );

      if (user) {
        localStorage.setItem("username", user.Username);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/form-book");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };
  return (
    <div className="page-md login">
      <div className="logo">
        <a href="/">
          <img src="../../assets/admin/layout3/img/logo-big.png" alt="Logo" />
        </a>
      </div>

      <div className="content">
        <form className="login-form" onSubmit={handleLogin}>
          <h3 className="form-title">Login to your account</h3>

          {error && (
            <div className="alert alert-danger">
              <button
                type="button"
                className="close"
                onClick={() => setError(null)}
              >
                &times;
              </button>
              <span>{error}</span>
            </div>
          )}

          <div className="form-group">
            <label className="control-label">Username</label>
            <div className="input-icon">
              <i className="fa fa-user" />
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <div className="input-icon">
              <i className="fa fa-lock" />
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <label className="checkbox">
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <button
              type="submit"
              className="btn blue pull-right"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}{" "}
              <i className="m-icon-swapright m-icon-white" />
            </button>
          </div>
        </form>
      </div>

      <div className="copyright">2024 © Library Management System</div>
    </div>
  );
}

export default Login;
