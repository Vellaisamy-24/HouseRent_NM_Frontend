import React from "react";
import { House } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  w-full py-1 bg-white justify-between px-10 flex-wrap">
      <button onClick={() => navigate("/")}>
        <House />
      </button>
      <button>
        <Search />
      </button>
      <button onClick={() => navigate("/profile")}>
        <User />
      </button>
    </div>
  );
};

export default MobileNavbar;
