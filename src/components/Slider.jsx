import React from "react";
import Home from "../assets/HouseLogo.png";

const Slider = () => {
  const images = [
    {
      id: 1,
      title: "Flat 20% Offer",
      name: Home,
    },
    {
      id: 2,
      title: "Flat 20% Offer",
      name: Home,
    },
    {
      id: 3,
      title: "Flat 20% Offer",
      name: Home,
    },
    {
      id: 4,
      title: "Flat 20% Offer",
      name: Home,
    },
    {
      id: 4,
      title: "Flat 20% Offer",
      name: Home,
    },
    {
      id: 5,
      title: "Flat 20% Offer",
      name: Home,
    },
  ];
  return (
    <div className="px-5">
      <div className="flex relative overflow-x-auto  rounded-2xl">
        {/* <img src={Home} />
        <img src={Home} />
        <img src={Home} /> */}
        {images.map((data, index) => (
          <div key={index} className="flex-shrink-0 w-full relative">
            <img
              src={data.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black w-24 opacity-20 via-transparent to-transparent rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-tl from-black  opacity-30 via-transparent to-transparent rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black  opacity-10 via-transparent to-transparent rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-bl from-black  opacity-5 via-transparent to-transparent rounded-md" />
            <div className="absolute bottom-0 right-0 left-0 w-full h-1/3 bg-gradient-to-tl from-black opacity-40 via-transparent to-transparent rounded-md" />
            <p className="bottom-0 w-full  font-bold text-white  absolute p-2">
              {data.title && data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
