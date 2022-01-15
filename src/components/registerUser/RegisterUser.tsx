import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const RegisterUser = () => {
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        "test@test.com",
        "asdasda"
      );
      console.log(user);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default RegisterUser;
