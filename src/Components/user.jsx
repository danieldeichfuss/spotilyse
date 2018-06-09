import React from "react";

export default function User({ user, initExpoloration }) {
  return (
    <div className="User">
      <img className="User__avatar" src={user.imageUrl} alt="" />
      <p className="User__intro">
        Hi {user.name},
        <br />
        welcome to Spotilyse! Here you can expolore your musical personality and discover your favourite artists.
      </p>
      <button className="Login__button" onClick={initExpoloration}>
        Start exploring
      </button>
    </div>
  );
}
