import React from "react";
import { Link } from "react-router-dom";
import LoginAndRegisterHeader from "../LoginAndRegisterHeader/LoginAndRegisterHeader";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-root">
      <LoginAndRegisterHeader></LoginAndRegisterHeader>
      <div className="register-container">
        <form action="">
          <h2 className="h2-register">Create An Account</h2>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            className="login-page-input"
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            className="login-page-input"
          />
          <input
            type="text"
            name="uemail"
            id="uemail"
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
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="login-page-input"
          /> <br />
          <input type="submit" value="Create An Account" className="login-button" style={{padding: '5px 40px'}} />
        </form>
        <p>Already have an account, <Link to="/login">Login</Link> </p>
      </div>
      <p>Or</p>
      <button className="social-login-btn">Login with Facebook</button> <br />
      <button className="social-login-btn">Continue With Google</button>
    </div>
  );
};

export default Register;
