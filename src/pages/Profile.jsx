import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    fetchUser();
  }, []);
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userName, setUserName] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3500/api/user/fetchUser",
        {
          email: user.email,
        }
      );
      setUserName(response?.data?.user?.userName || "");
      setCountry(response?.data?.user?.country || "");
      setPinCode(response?.data?.user?.pinCode || "");
      setAddress(response?.data?.user?.address || "");
      setMobileNo(response?.data?.user?.mobileNo || "");
      setState(response?.data?.user?.state || "");
      setEmail(response?.data?.user?.email || user.email);
      console.log(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(
        `${import.meta.env.VITE_BASEURL}/user/updateProfile`,
        {
          email: user.email,

          address,
          state,
          country,
          mobileNo,
          pinCode,
          userName,
        }
      );
      console.log(response?.data?.message);

      fetchUser();
      setTimeout(() => {
        toast.success(response?.data?.message);
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error(response?.data?.message || "Internal server error");
    }
  };
  return (
    <section className="px-3">
      <form onSubmit={(e) => updateUser(e)} className="border p-3">
        {/* {email}email Profile{user && user.email} */}
        <div>
          <label>Email</label>
          <input
            type="email"
            disabled={true}
            className="border rounded-lg p-2"
            value={email}
          />
        </div>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={userName}
            className="border outline-none rounded-lg p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            className="border outline-none rounded-lg p-2"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Pincode</label>
          <input
            type="tel"
            value={pinCode}
            className="border outline-none rounded-lg p-2"
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div>
          <label>MobileNo</label>
          <input
            type="tel"
            value={mobileNo}
            className="border outline-none rounded-lg p-2"
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            value={state}
            className="border outline-none rounded-lg p-2"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            value={country}
            className="border outline-none rounded-lg p-2"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="rounded-lg p-2 border">
            Update
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
