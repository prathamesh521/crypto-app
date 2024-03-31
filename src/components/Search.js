import React, { useState } from "react";
import axios from "axios";

const Search = ({ getCoins }) => {
  const [search, setSearch] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;

    console.log(searchQuery);
    axios
      .get(`https://api.coingecko.com/api/v3/search?query=bitcoin`)
      .then((response) => {
        console.log(response.data.coins);
        getCoins(response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      setSearch('');

    }

  const handleOnChange = (e) => {
    setSearch(e.target.value);

    console.log(e.target.value)
  };



  return (
    <div className="coin-search">
      {/* <h1 className="coin-text">Search your desired coin</h1> */}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="coin-input"
          placeholder="Provide the coin name"
          value={search}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default Search;
