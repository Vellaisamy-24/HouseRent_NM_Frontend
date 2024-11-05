import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3500/api/user/signup",
        { email, password }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <form onSubmit={(e) => login(e)}>
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
