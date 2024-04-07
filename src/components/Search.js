import React, { useState } from "react";
import axios from "axios";

const Search = ({ getCoins, className }) => {
  const [search, setSearch] = useState('');
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const searchQuery = search.trim();

    // Update the browser URL with the search query
    window.history.pushState(null, '', `?query=${encodeURIComponent(searchQuery)}`);

    axios
      .get(`https://api.coingecko.com/api/v3/search?query=${searchQuery}`)
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
  };

  return (
    <div className="coin-search">
      {/* <h1 className="coin-text">Search your desired coin</h1> */}
      <form onSubmit={handleOnSubmit} className={`search-form ${className}`}>
        <input
          type="text"
          className="form-control search-field"
          placeholder="Provide the coin name"
          value={search}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default Search;
