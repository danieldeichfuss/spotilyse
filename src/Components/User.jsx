import React from "react";

export default function User({ user }) {
  return (
    <div className="User">
      <img className="User__avatar" src={user.imageUrl} alt="User avatar" />
      <p className="User__intro">
        Hi {user.name},
        <br />
        welcome to Spotilyse! Here you can expolore your musical personality and
        discover your favourite artists.
      </p>
    </div>
  );
}
