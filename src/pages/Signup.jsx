import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sigup = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/user/signup`,
        { email, password }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <form onSubmit={(e) => sigup(e)}>
        <h1>SignUp</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Signup;
