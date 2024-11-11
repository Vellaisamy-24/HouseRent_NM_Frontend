import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const SideNavbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const navView = () => {
    setSideNav(!sideNav);
  };
  const nav = [
    {
      title: "Users",
    },
    {
      title: "Properties",
    },
    {
      title: "Owners",
    },
  ];
  return (
    <div>
      <div className=" sm:flex hidden w-1/4 h-screen border-r-2  flex-col  gap-10 ">
        {nav.map((data) => (
          <div className=" flex items-center justify-center w-full py-5  border-b-2 cursor-pointer">
            <p>{data.title}</p>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="flex sm:hidden  ">
        <div
          className={`flex ${
            sideNav ? "w-1/4 border-r-2" : ""
          }  h-screen   flex-col  gap-10 `}
        >
          {sideNav ? (
            <>
              <button onClick={navView} className="mr-auto cursor-pointer">
                <X />
              </button>
            </>
          ) : (
            <>
              <button className="mr-auto flex left-0 " onClick={navView}>
                <Menu />
              </button>
            </>
          )}
          {sideNav && (
            <>
              {" "}
              {nav.map((data) => (
                <div className=" flex items-center justify-center w-full py-5  border-b-2 cursor-pointer">
                  <p>{data.title}</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          className={` ${sideNav ? "w-3/4" : "w-full"} flex justify-center  `}
        >
          <h1>Admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;