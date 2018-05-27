import React from "react";
import User from "./user";
import FavouriteSong from "./favourite-song";
import TopTen from "./top-ten";
import Discover from "./discover";

export default function Dashboard(props) {
  return (
    <div>
      <User user={props.user} />
      <FavouriteSong
        favouriteSong={props.tracks[0]}
        favouriteArtist={props.artists[0]}
        favouriteTrack={props.favouriteTrack}
        favouriteTrackFeatures={props.favouriteTrackFeatures}
      />
      <TopTen tracks={props.tracks} artists={props.artists} />
      <Discover />
    </div>
  );
}
