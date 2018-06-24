import React from "react";
import Eyes from "../img/Eyes";
import Button from "./Button";

export default function Login({ initLogin }) {
  return (
    <div className="Login">
      <p className="Login__intro">Take a deep dive into your soul ...</p>
      <Eyes />
      <p className="Login__intro">... I mean musical Soul</p>
      <Button callback={initLogin} text="Login with Spotify" />
    </div>
  );
}
