import React from "react";
import Dashboard from "./dashboard";
import Login from "./login";

export default function Main(props) {
  const serverData = props.serverData;
  let user = props.serverData.user ? props.serverData.user : false;
  const main = serverData.user ? (
    <Dashboard user={user} />
  ) : (
    <Login initLogin={props.initLogin} />
  );
  return main;
}
