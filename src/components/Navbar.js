import React, {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const Navbar = ({ setCoins }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container-md">
          <a className="navbar-brand" href="#">
            CoinsCheck
          </a>
          
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <Search getCoins={(a) => setCoins(a)} className={isSearchActive ? 'active' : ''}/>
            <a  className="nav-list-icon search-icon" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="/profile" className="nav-list-icon user-icon">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="/favourites" className="nav-list-icon favorite-icon">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
