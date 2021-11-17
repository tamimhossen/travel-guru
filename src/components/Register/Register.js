import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginAndRegisterHeader from "../LoginAndRegisterHeader/LoginAndRegisterHeader";
import "./Register.css";
import {
  fbSignInWIthAuthProvider,
  googleSingnInWithAuthProvider,
} from "../SocialLoginManager/SocialLoginManager";
import { UserContext } from "../../App";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js/firebaseConfig";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Register = () => {
  const app = initializeApp(firebaseConfig);
  const [loggedInuser, setLoggedInUser] = useContext(UserContext);
  let password;
  let confirmPassword;

  const handleGoolgeSignIn = () => {
    googleSingnInWithAuthProvider()
      .then((res) => {
        setLoggedInUser(res);
      })
      .catch((res) => {
        setLoggedInUser(res);
      });
  };

  const handleFbSignIn = () => {
    fbSignInWIthAuthProvider()
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
      let passwordAllright = true;
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      passwordAllright = isPasswordValid && passwordHasNumber;
      if (passwordAllright) {
        password = e.target.value;
      }
    }
    if (e.target.name === "confirmPassword") {
      confirmPassword = e.target.value;
      isFieldValid = password === confirmPassword;
    }

    if (isFieldValid) {
      const newUserInfo = { ...loggedInuser };
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      loggedInuser.email,
      loggedInuser.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        const newUserInfo = { ...loggedInuser };
        newUserInfo.error = "";
        newUserInfo.success = true;
        updateProfileInfo(loggedInuser.name);
        setLoggedInUser(newUserInfo);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...loggedInuser };
        newUserInfo.success = false;
        newUserInfo.error = errorMessage;
        setLoggedInUser(newUserInfo);
      });

    e.preventDefault();
  };

  const updateProfileInfo = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log("profile update failed");
      });
  };

  const conPrint = () => {
    console.log(loggedInuser);
  };

  return (
    <div className="register-root">
      <LoginAndRegisterHeader></LoginAndRegisterHeader>
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h2 className="h2-register">Create An Account</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            className="login-page-input"
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            className="login-page-input"
            onBlur={handleBlur}
          />
          <input
            type="text"
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
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="login-page-input"
            onBlur={handleBlur}
          />{" "}
          <br />
          <input
            type="submit"
            value="Create An Account"
            className="login-button"
            style={{ padding: "5px 40px" }}
          />
        </form>
        <p>
          Already have an account, <Link to="/login">Login</Link>{" "}
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
      {loggedInuser.success ? (
        <p>
          Account Created Successfully <br /> Go Back and{" "}
          <Link to="/login">Login Now</Link>{" "}
        </p>
      ) : (
        <p>{loggedInuser.error}</p>
      )}
    </div>
  );
};

export default Register;
