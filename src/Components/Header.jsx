import React from "react";
import Logo from "../img/Logo";

function Header() {
  return (
    <header className="Header">
      <Logo />
      <p className="Header__intro">Your Spotify personality dashboard</p>
    </header>
  );
}

export default Header;
