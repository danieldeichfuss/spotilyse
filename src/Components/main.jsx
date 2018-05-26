import React from "react";
import Dashboard from "./dashboard";
import Login from "./login";

export default function Main(props) {
  let user = props.user ? props.user : false;
  let tracks = props.tracks ? props.tracks : false;
  let artists = props.artists ? props.artists : false;

  const main = user ? (
    <Dashboard user={user} tracks={tracks} artists={artists} />
  ) : (
    <Login initLogin={props.initLogin} />
  );
  return main;
}
