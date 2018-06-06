import React from "react";
import Dashboard from "./dashboard";
import Login from "./login";

export default function Main(props) {
  let user = props.user ? props.user : false;
  let tracks = props.tracks ? props.tracks : false;
  let artists = props.artists ? props.artists : false;
  let favouriteTrack = props.favouriteTrack ? props.favouriteTrack : false;
  let favouriteTrackFeatures = props.favouriteTrackFeatures
    ? props.favouriteTrackFeatures
    : false;

  const main = user ? (
    <Dashboard
      user={user}
      tracks={tracks}
      artists={artists}
      favouriteTrack={favouriteTrack}
      favouriteTrackFeatures={favouriteTrackFeatures}
    />
  ) : (
    <Login initLogin={props.initLogin} />
  );
  return (
    <Dashboard
      user={user}
      tracks={tracks}
      artists={artists}
      favouriteTrack={favouriteTrack}
      favouriteTrackFeatures={favouriteTrackFeatures}
    />
  );
}
