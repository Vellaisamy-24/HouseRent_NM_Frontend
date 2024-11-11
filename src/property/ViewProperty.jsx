import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { House, IndentIncrease, IndianRupee, ParkingCircle, ParkingCircleOff } from "lucide-react";
import { LandPlot } from "lucide-react";
import { CircleParking } from "lucide-react";
import { CircleParkingOff } from "lucide-react";
import { MapPin } from "lucide-react";
import { GiPaintRoller, GiRupee } from "react-icons/gi";
import { TbPaintOff } from "react-icons/tb";

const ViewProperty = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchProperty();
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [parking, setParking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [images, setImages] = useState([]);
  const fetchProperty = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/property/findPropertyById/${id}`
      );
      console.log(response);
      console.log(response.data.message, "message");
      setTitle(response?.data?.property?.title);
      setDescription(response?.data?.property?.description);
      setAddress(response?.data?.property?.address);
      setParking(response?.data?.property?.parking);
      setIsAvailable(response?.data?.property?.isAvailable);
      setArea(response?.data?.property?.area);
      setFurnished(response?.data?.property?.furnished);
      setPrice(response?.data?.property?.price);
      setImages(response?.data?.property?.images);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      {/* ViewProperty{id} */}
      {/* {title} */}
      <div className="w-full ">
        <img src={images[0]} className="w-full h-full " />
        <div className="absolute inset-0 bg-gradient-to-tr from-black  opacity-30 via-transparent to-transparent rounded-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-black  opacity-30 via-transparent to-transparent rounded-md" />
      </div>
      <div className="flex w-full -mt-14  h-full bg-white rounded-t-3xl border-t-2 absolute   border-blacl flex-col gap-4">
        <div className="flex flex-col gap-3 px-5 py-3">
          <div className="flex justify-between">
            <h1 className="flex items-center gap-2 flex-wrap">
              <House />
              {title}
            </h1>
            <p className="flex items-center gap-1">
              <IndianRupee size={16} />
              {price}
            </p>
          </div>

          <p className="text-xs text-neutral-700 flex flex-wrap">
            {description}
          </p>
          <h1 className="flex items-center gap-2">
            <LandPlot />
            {area}
          </h1>
          <p className="text-xs flex items-center flex-wrap gap-2">
            <MapPin />
            {address}
          </p>

          {parking ? (
            <>
              {" "}
              <p className="flex items-center gap-3">
                <ParkingCircle />
                Parking
              </p>
            </>
          ) : (
            <p className="flex items-center gap-3">
              <ParkingCircleOff /> No Parking
            </p>
          )}
          <p className="flex items-center mr-auto gap-3">
            <input className="" type="checkbox" checked={isAvailable} />
            Available
          </p>

          {furnished ? (
            <p className="flex items-center gap-3">
              <GiPaintRoller />
              Furnished
            </p>
          ) : (
            <p className="flex items-center gap-3">
              <TbPaintOff /> Not Furnished
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
