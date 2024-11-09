import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/user/login`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      console.log(response.data.token, "login token");
      // localStorage.setItem("JWTToken", response.data?.token);
      // localStorage.setItem("isAdmin", response.data?.isAdmin);
      console.log(response.data.isAdmin, "admin Status");
      dispatch(
        logIn({
          email: response.data?.user?.email,
          _id: response.data?.user?._id,
          token:response?.data?.token
        })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <form onSubmit={(e) => login(e)}>
        <h1>Login</h1>
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

export default Login;
