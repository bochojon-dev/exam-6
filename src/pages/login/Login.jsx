import React, { useState } from "react";
import "../login/Login.css";
import axios from "../../api";
import { toast } from "react-toastify";
import logo from "../../assets/Link-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log("res>>>", res.data.token);
        toast.success("Welcome!");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("err>>>", err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleLogin} className="login_contents">
          <img src={logo} alt="logo" />
          <div className="input">
            <label htmlFor="username">Email Address*</label>
            <input
              name="username"
              required
              value={username}
              placeholder="Enter Your Email"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password*</label>
            <input
              name="password"
              required
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="forgot">
            <div className="me">
              <input type="checkbox" name="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Forgot Password?</p>
          </div>
          <div className="sign">
            <button className="btn1" disabled={loading} type="submit">
              {loading ? "Loading..." : "Log in"}
            </button>
            <button className="btn2">Signup?</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
