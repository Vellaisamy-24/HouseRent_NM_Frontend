import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../FirebaseConfig";
import axios from "axios";
const GAuth = () => {
  const GoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const email = result.user.email;
      // const userName=result.user.displayName
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/user/googleAuth`,
        {
          email,
        }
      );
      console.log(response);
      console.log(response.data.message);
      console.log(response.data.isAdmin, "admin Status");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={GoogleAuth}>Goolge Login</button>
    </div>
  );
};

export default GAuth;
