import React from "react";
import Discover from "./discover";

export default function FavouriteSongs(props) {
  const tracksToRender =
    props.tracks && props.tracks.map(track => <li>{track.name}</li>);
  return (
    <div>
      <h2>What your favourite songs say about you</h2>
      {tracksToRender}
    </div>
  );
}
