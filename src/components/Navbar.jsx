import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex border-b fixed  bg-white  w-full top-0 z-10 py-3 ">
      {/* <Link to="/signup">signup</Link>
      <GAuth />
      <Link to="/login">Login</Link>
      {isAdmin && <Link to="/admin/dashboard">admin</Link>}
      <Logout /> */}
      <div className="">HousRent</div>
      <div className="flex ml-auto items-center gap-3 pr-10">
        <Link to="/signup">signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
