import React from "react";
import Logo from "../img/Logo";

function Header() {
  return (
    <header className="Header">
      {/* <h1 className="Header__title">Spotilyse</h1> */}
      <Logo />
      <p className="Header__intro">Your Spotify personality dashboard</p>
    </header>
  );
}

export default Header;
