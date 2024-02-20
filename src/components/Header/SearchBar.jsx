import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    // Search Term
    console.log("Search Term:", searchTerm);
    // Search Time

    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchTerm}"}`,
        config
      );
      setSearchResult(response.data);

      // Response Data
      console.log("response", response.data);
      // Response Data
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <section className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search"
        id="search"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>
    </section>
  );
}

export default SearchBar;
