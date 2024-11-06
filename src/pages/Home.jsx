import React from "react";
import { Link } from "react-router-dom";
import GAuth from "./GAuth";
import Logout from "./Logout";
const Home = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  console.log(isAdmin, "from home");
  return (
    <div>
      <Link to="/signup">signup</Link>
      <GAuth />
      <Link to="/login">Login</Link>
      {isAdmin && <Link to="/admin/dashboard">admin</Link>}
      <Logout />
    </div>
  );
};

export default Home;
