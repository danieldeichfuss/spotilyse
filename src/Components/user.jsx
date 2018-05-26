import React from "react";

export default function User(props) {
  return (
    <div>
      <img src={props.user.imageUrl} alt="" />
      <h2>{props.user.name}</h2>
      <span>{props.user.product}</span>
    </div>
  );
}
