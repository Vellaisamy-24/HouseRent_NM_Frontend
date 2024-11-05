import React, { useState } from "react";
import Users from "./Users";

const Dashboard = () => {
  const [view, setView] = useState(false);
  const user = () => {
    setView(!view);
  };
  return (
    <div>
      Dashboard
      <button onClick={user}>{view ? <p>vclose</p> : <p>view Users</p>}</button>
      {view && <Users />}
      {/* <Users /> */}
    </div>
  );
};

export default Dashboard;
