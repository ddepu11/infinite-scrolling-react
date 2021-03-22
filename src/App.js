import "./App.css";
// nLEPyjNGvZS12M6eUrJ0ozaIpQpCNRH5vXRdssymP0c
// https://api.unsplash.com/
import Images from "./Images";
import { useState, useEffect } from "react";

const API = `?client_id=${process.env.REACT_APP_UNSPLASH_API}`;
const baseUrl = "https://api.unsplash.com/photos/";

function App() {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  let finalUrl = baseUrl + API;

  async function fetchImages() {
    setLoading(true);
    try {
      const res = await fetch(finalUrl);
      const data = await res.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   fetchImages();
  // }, []);

  let show = loading
    ? ""
    : images.map((item, index) => {
        const {
          likes,
          urls: { small },
          user: {
            updated_at,
            profile_image: { medium },
          },
        } = item;

        const details = {
          likes,
          image: small,
          userImg: medium,
          updatedAt: updated_at,
        };

        console.log(details);
        return <Images key={index} {...details} />;
      });

  return (
    <div className="container">
      <main className="grid">{loading ? <h1>Loading...</h1> : show}</main>
    </div>
  );
}

export default App;
