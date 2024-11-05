import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  useEffect(() => {
    users();
  }, []);
  const [userData, setUserData] = useState([]);
  const users = async () => {
    const response = await axios.get(
      "http://localhost:3500/api/admin/getAllUsers"
    );
    console.log(response?.data?.user);
    setUserData(response?.data?.user);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {userData &&
        userData.map((data, index) => <div key={index}>{data.email}</div>)}
    </div>
  );
};

export default Users;
