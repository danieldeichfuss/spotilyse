import React from "react";
import eyes from "../img/eyes.svg";

export default function Login(props) {
  return (
    <div className="Login">
      <p className="Login__intro">Take a deep dive into your soul ...</p>
      <img className="Login__eyes" src={eyes} alt="eyes" />
      <p className="Login__intro">... I mean musicl Soul</p>
      <button className="Login__button" onClick={props.initLogin}>
        Login with Spotify
      </button>
    </div>
  );
}
