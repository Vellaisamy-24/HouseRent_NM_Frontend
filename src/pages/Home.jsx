import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/signup">signup</Link>
     
      <Link to="/login">Login</Link>
      <Link to="/admin/dashboard">admin</Link>
    </div>
  );
};

export default Home;
