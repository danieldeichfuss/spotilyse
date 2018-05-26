import React from "react";

export default function Main(props) {
  const serverData = props.serverData;
  let user = props.serverData.user ? props.serverData.user : false;
  const main = serverData.user ? (
    <div>
      <img src={user.imageUrl} alt="" />
      <h2>{user.name}</h2>
      <span>{user.product}</span>
    </div>
  ) : (
    <button onClick={props.initLogin}>Login</button>
  );
  return main;
}
