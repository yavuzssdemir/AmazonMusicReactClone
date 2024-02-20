import React from "react";
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPodcast,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="navbar-container">
      <AppLogo />
      <ul className="link-container">
        <li>
          <FontAwesomeIcon icon={faHouse} style={{ marginRight: "10px" }} />
          <NavLink to="home">HOME</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faPodcast} style={{ marginRight: "10px" }} />
          <NavLink to="social">SOCIAL</NavLink>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faHeadphones}
            style={{ marginRight: "10px" }}
          />
          <NavLink to="library">LIBRARY</NavLink>
        </li>
      </ul>
      <SearchBar />
      <Profile />
    </nav>
  );
}

export default Header;
