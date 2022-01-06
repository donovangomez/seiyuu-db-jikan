import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import SearchContainer from "./components/SearchContainer";
import DefaultContainer from "./components/DefaultContainer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [seiyuu, setSeiyuu] = useState([]);
  const [topSeiyuu, setTopSeiyuu] = useState([]);

  const fetchTopSeiyuu = async () => {
    const res = await fetch(
      "https://api.jikan.moe/v4/people?order_by=favorites&sort=desc&limit=15"
    );
    const data = await res.json();
    setTopSeiyuu(data.data);
    console.log(seiyuu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchSeiyuu(searchInput);
    setSearchInput("");
  };

  const searchSeiyuu = async (query) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/people?q=${query}&order_by=favorites&sort=desc`
    );
    const data = await res.json();

    setSeiyuu(data.data);
    console.log(seiyuu);
  };

  useEffect(() => {
    fetchTopSeiyuu();
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Search Seiyuu</h2>
      </header>
      <Form
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchSeiyuu={searchSeiyuu}
        seiyuu={seiyuu}
        handleSearch={handleSearch}
      />
      {seiyuu.length > 2 ? (
        // <section>
        //   {topSeiyuu.map((va) => (
        //     <div>
        //       <h2>{va.name}</h2>
        //       <img src={va.images.jpg.image_url} />
        //     </div>
        //   ))}
        // </section>
        <SearchContainer seiyuu={seiyuu} />
      ) : (
        <DefaultContainer topSeiyuu={topSeiyuu} />
      )}
      {/* <section>
        {topSeiyuu.map((va) => (
          <div>
            <h2>{va.name}</h2>
            <img src={va.images.jpg.image_url} />
          </div>
        ))}
      </section> */}
    </div>
  );
}

export default App;
