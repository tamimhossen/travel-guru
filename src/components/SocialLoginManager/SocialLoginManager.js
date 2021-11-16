import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js/firebaseConfig";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../App";
const app = initializeApp(firebaseConfig);




export const googleSingnInWithAuthProvider = () => {
    const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const signedInUser = {
          name: user.displayName,
          email: user.email,
          error : '',
          success: true,
        }
        console.log(result);
        return signedInUser;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        const signedInUser = {
          success: false,
          error: errorMessage
        }
        return signedInUser
      });
}

export const fbSignInWIthAuthProvider = () => {
    const fbProvider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, fbProvider)
      .then((result) => {
        const _tokenResponse = result._tokenResponse;
        console.log(result);
        const signedInUser = {
          name: _tokenResponse.displayName,
          email: _tokenResponse.email,
          error : '',
          success: true,
        }
        console.log(result._tokenResponse);
        return signedInUser;
      })
      .catch((error) => {
        const errorMessage = error.message;
        const signedInUser = {
          success: false,
          error: errorMessage
        }
        console.log(errorMessage);
        return signedInUser;
      });
}