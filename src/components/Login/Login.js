import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginAndRegisterHeader from "../LoginAndRegisterHeader/LoginAndRegisterHeader";
import {
  fbSignInWIthAuthProvider,
  googleSingnInWithAuthProvider,
} from "../SocialLoginManager/SocialLoginManager";
import { UserContext } from "../../App";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const app = initializeApp(firebaseConfig);
  const [loggedInuser, setLoggedInUser] = useContext(UserContext);

  const handleFbSignIn = () => {
    fbSignInWIthAuthProvider()
      .then((res) => {
        setLoggedInUser(res);
      })
      .catch((res) => {
        setLoggedInUser(res);
      });
  };

  const handleGoolgeSignIn = () => {
    googleSingnInWithAuthProvider()
      .then((res) => {
        setLoggedInUser(res);
      })
      .catch((res) => {
        setLoggedInUser(res);
      });
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isFieldValid);
    }

    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if (isFieldValid) {
      const newUserInfo = { ...loggedInuser };
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loggedInuser.email, loggedInuser.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUserInfo = {...loggedInuser};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setLoggedInUser(newUserInfo);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = {...loggedInuser};
        newUserInfo.success = false;
        newUserInfo.error = errorMessage;
        setLoggedInUser(newUserInfo);
        console.log(errorMessage);
      });
    e.preventDefault();
  };

  const conPrint = () => {
    console.log(loggedInuser);
  };

  return (
    <div className="login-root">
      <LoginAndRegisterHeader />
      {/* Header section ended */}
      {/* Login Body Started */}
      <div className="login-container">
        <h2 className="h2-Login">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username or Email"
            className="login-page-input"
            onBlur={handleBlur}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="login-page-input"
            onBlur={handleBlur}
          />
          <div className="d-flex text-center">
            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="remember-checkbox"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div>
              <Link to="forgot" className="forgot-button">
                Forgot Password
              </Link>
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className="login-button"
            style={{ marginTop: "20px" }}
          />
        </form>
        <p>
          Don't have a account,{" "}
          <Link to="/createAccount" className="account-creation-link">
            Create An Account
          </Link>{" "}
        </p>
      </div>
      <p>Or</p>
      <button className="social-login-btn" onClick={handleFbSignIn}>
        Login with Facebook
      </button>{" "}
      <br />
      <button className="social-login-btn" onClick={handleGoolgeSignIn}>
        Continue With Google
      </button>
      <br />
      <button onClick={conPrint}>console</button>
    </div>
  );
};

export default Login;
