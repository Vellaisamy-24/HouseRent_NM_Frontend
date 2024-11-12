import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <nav className="flex  justify-between w-full items-center px-5  ">
      {/* <Link to="/signup">signup</Link>
      <GAuth />
      <Link to="/login">Login</Link>
      {isAdmin && <Link to="/admin/dashboard">admin</Link>}
      <Logout /> */}
      <div className="font-semibold text-xl">HousRent</div>
      <div className="flex  items-center gap-3 pr-10">
        <Link to="/signup">signup</Link>
        <Link to="/login">Login</Link>
        {user && user.email}
      </div>
    </nav>
  );
};

export default Navbar;
