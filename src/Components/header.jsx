import React from "react";
import logo from "../logo.svg";

function Header(props) {
  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="logo" />
      <h1 className="Header__title">Spotilyse</h1>
      <p className="Header__intro">Your Spotify personality dashboard</p>
    </header>
  );
}

export default Header;
