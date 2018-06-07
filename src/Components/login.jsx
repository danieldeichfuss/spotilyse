import React from "react";

export default function Login(props) {
  return (
    <div className="Login">
      <button className="Login__button" onClick={props.initLogin}>
        Login
      </button>
    </div>
  );
}
