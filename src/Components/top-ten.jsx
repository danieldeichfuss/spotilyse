import React from "react";
import Discover from "./discover";

export default function TopTen(props) {
  const tracksToRender =
    props.tracks && props.tracks.map(track => <li>{track.name}</li>);
  const artistsToRender =
    props.artists && props.artists.map(artist => <li>{artist.name}</li>);
  return (
    <div>
      <h2>Your Top 10</h2>
      <h3>Top 10 Tracks</h3>
      {tracksToRender}
      <h3>Top 10 Artists</h3>
      {artistsToRender}
    </div>
  );
}
