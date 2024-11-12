import React, { useState } from "react";
import Users from "./Users";
import SideNavbar from "./SideNavbar";

const Dashboard = () => {
  // const [view, setView] = useState(false);
  const [view, setView] = useState("Users");
  // const user = () => {
  //   setView(!view);
  // };
  const handleViewChange = (newView) => {
    setView(newView);
  };
  return (
    <div>
      <section className="hidden sm:flex fixed top-0 w-full border-b bg-white py-3">
        <h1 className="flex items-center justify-center">Admin Dashboard</h1>
      </section>
      {/* Dashboard */}
      {/* <button onClick={user}>{view ? <p>vclose</p> : <p>view Users</p>}</button>
      {view && <Users />} */}
      {/* <Users /> */}
      <section className="sm:pt-11">
        <SideNavbar onViewChange={handleViewChange} />
      </section>
    </div>
  );
};

export default Dashboard;
