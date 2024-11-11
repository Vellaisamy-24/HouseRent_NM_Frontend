import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "../FirebaseConfig";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const CreateProperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [parking, setParking] = useState(false);
  const [bedRoom, setBedRoom] = useState(0);
  const [bathRoom, setBathRoom] = useState(0);
  const [area, setArea] = useState("");
  const [furnished, setFurnished] = useState(false);
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const user = useSelector((state) => state.user.user);
  console.log(user, "User redux");
  const createProperty = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3500/api/property/createProperty",
        {
          title,
          description,
          price,
          bedRoom,
          bathRoom,
          parking,
          isAvailable,
          furnished,
          area,images,
          address,
          owner: user._id,
        }
      );
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const imageUpload = async (e) => {
    try {
      e.preventDefault();
      const imageRef = ref(storage, `image/${v4()}`);
      await uploadBytes(imageRef, image);
      const images = await getDownloadURL(imageRef);
      console.log(images, "image from firebase");
      setImages((prev) => [...prev, images]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteImage = (id) => {
    const delteImages = images.filter((data) => data != id);
    setImages(delteImages);
  };
  return (
    <form onSubmit={(e) => createProperty(e)}>
      {user && user._id}
      <div className="flex gap-2">
        <h1>Title</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 "
          type="text"
        />
      </div>
      <div className="flex gap-2">
        <h1>Description</h1>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 "
          type="text"
        />
      </div>
      <div className="flex gap-2">
        <h1>Address</h1>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 "
          type="text"
        />
      </div>
      <div className="flex gap-2">
        <h1>Furished</h1>
        <input
          checked={furnished}
          onChange={(e) => setFurnished(e.target.checked)}
          className="border p-2 "
          type="checkbox"
        />
      </div>
      <div className="flex gap-2">
        <h1>Price</h1>
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border p-2 "
          type="tel"
        />
      </div>
      <div className="flex gap-2">
        <h1>Area</h1>
        <input
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border p-2 "
          type="text"
        />
      </div>
      <div className="flex gap-2">
        <h1>BedRoom</h1>
        <input
          value={bedRoom}
          onChange={(e) => setBedRoom(Number(e.target.value))}
          className="border p-2 "
          type="tel"
        />
      </div>
      <div className="flex gap-2">
        <h1>BathRoom</h1>
        <input
          value={bathRoom}
          onChange={(e) => setBathRoom(Number(e.target.value))}
          className="border p-2 "
          type="tel"
        />
      </div>
      <div className="flex gap-2">
        <h1>Parking</h1>
        <input
          checked={parking}
          onChange={(e) => setParking(e.target.checked)}
          className="border p-2 "
          type="checkbox"
        />
      </div>
      <div className="flex gap-2">
        <h1>Avaiable</h1>
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
          className="border p-2 "
        />
      </div>
      <button className="border p-2 rounded-lg" type="submit">
        Create
      </button>
      <div>
        <h1>Images</h1>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={(e) => imageUpload(e)} type="button">
          Upload
        </button>
      </div>
      {images &&
        images.map((data, index) => (
          <div className="w-16 h-16" key={index}>
            <img src={data} alt="imgage" />
            <button onClick={(e) => deleteImage(data)}>Delete</button>
          </div>
        ))}
    </form>
  );
};

export default CreateProperty;
