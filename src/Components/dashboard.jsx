import React from "react";
import User from "./user";
import FavouriteSongs from "./favourite-songs";
import TopTen from "./top-ten";
import Discover from "./discover";

export default function Dashboard(props) {
  return (
    <div>
      <User user={props.user} />
      <FavouriteSongs tracks={props.tracks} />
      <TopTen />
      <Discover />
    </div>
  );
}
