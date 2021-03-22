import "./App.css";
import Images from "./Images";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const API = `?client_id=${process.env.REACT_APP_UNSPLASH_API}`;
const baseUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos/";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");

  async function fetchImages() {
    setLoading(true);
    console.log(page, term);

    let finalUrl = `${baseUrl}${API}&page=${page}`;

    if (term !== "") {
      finalUrl = `${searchUrl}${API}&page=${page}&query=${term}`;
    }

    try {
      const res = await fetch(finalUrl);
      const data = await res.json();

      if (page > 0 && term === "") {
        setImages([...images, ...data]);
        console.log("no search");
      } else if (page > 0 && term !== false) {
        setImages([...images, ...data.results]);
        console.log("page > 0 search");
      } else if (term !== "" && page === 0) {
        setImages(data.results);
        console.log("only search");
      } else {
        setImages(data);
        console.log("default");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPage(0);
    fetchImages();
  }

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      let finalScroll = window.scrollY + window.innerHeight;
      let bodyHeight = document.body.scrollHeight - 3;

      let lastScrollTop = 0;
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        if (loading === false && finalScroll >= bodyHeight) {
          setPage((old) => {
            return old + 1;
          });
        }
      } else {
        // upscroll code
      }
    });

    return window.removeEventListener("scroll", event);
  }, []);

  let show =
    images.length === 0 ? (
      loading ? (
        <Loading />
      ) : (
        <h4 className="error">
          403 Error!! The Request limit to unsplash API is 50 per hour, Please
          reload after 50 min.
        </h4>
      )
    ) : (
      images.map((item, index) => {
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
          updatedAt: new Date(updated_at).toLocaleDateString(),
        };

        return <Images key={index} {...details} />;
      })
    );

  return (
    <div className="container">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search image"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main className="grid">{show}</main>
      {loading && <Loading />}
    </div>
  );
}

export default App;
