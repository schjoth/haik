import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

const provider = new GoogleAuthProvider();

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  );
};

export default Login;
