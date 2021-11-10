import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginAndRegisterHeader from "../LoginAndRegisterHeader/LoginAndRegisterHeader";

const Login = () => {
  return (
    <div className="login-root">
      <LoginAndRegisterHeader />
      {/* Header section ended */}
      {/* Login Body Started */}

      <div className="login-container">
        <h2 className="h2-Login">Login</h2>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username or Email"
            className="login-page-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="login-page-input"
          />
          <div className="d-flex text-center">
            <div>
              <input type="checkbox" name="remember" id="remember" className="remember-checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div>
                <Link to="forgot" className="forgot-button">Forgot Password</Link>
            </div>
          </div>
          <input type="submit" value="Login" className="login-button" style={{marginTop: '20px'}} />
        </form>
        <p>Don't have a account, <Link to="/createAccount" className="account-creation-link">Create An Account</Link> </p>
      </div>
      <p>Or</p>
      <button className="social-login-btn">Login with Facebook</button> <br />
      <button className="social-login-btn">Continue With Google</button>
    </div>
  );
};

export default Login;
