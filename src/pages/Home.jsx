import React from "react";
import { Link } from "react-router-dom";
import GAuth from "./GAuth";
import Logout from "./Logout";
import Properties from "../property/Properties";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
const Home = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  console.log(isAdmin, "from home");
  return (
    <div>
      {/* <Link to="/signup">signup</Link>
      <GAuth />
      <Link to="/login">Login</Link>
      {isAdmin && <Link to="/admin/dashboard">admin</Link>}
      <Logout /> */}
      <Navbar />
      <div className="sm:hidden py-20">
        <Slider />
      </div>

      <div className="">
        <h1 className="font-semibold text-slate-400 px-5 text-lg">Explore Properties </h1>
        <Properties />
      </div>
    </div>
  );
};

export default Home;
