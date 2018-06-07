import React from "react";

export default function User(props) {
  return (
    <div className="User">
      <img className="User__avatar" src={props.user.imageUrl} alt="" />
      <h2 className="User__name">{props.user.name}</h2>
      <span className="User__product">{props.user.product}</span>
    </div>
  );
}
