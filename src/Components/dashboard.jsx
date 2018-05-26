import React from "react";
import User from "./user";
import FavouriteSongs from "./favourite-songs";
import TopTen from "./top-ten";
import Discover from "./discover";

export default function Dashboard(props) {
  return (
    <div>
      <User user={props.user} />
      <FavouriteSongs
        favouriteSong={props.tracks[0]}
        favouriteArtist={props.artists[0]}
      />
      <TopTen tracks={props.tracks} artists={props.artists} />
      <Discover />
    </div>
  );
}

{
  /* favouriteSong={favouriteSong} favouriteArtist={favouriteArtist} */
}
