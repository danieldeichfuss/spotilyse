import React from "react";

export default function TopTen(props) {
  const tracksToRender =
    props.tracks &&
    props.tracks.map((track, i) => <li key={i.toString()}>{track.name}</li>);
  const artistsToRender =
    props.artists &&
    props.artists.map((artist, i) => <li key={i.toString()}>{artist.name}</li>);
  return (
    <div>
      <h2>Your Top 10</h2>
      <h3>Top 10 Tracks</h3>
      <ul>{tracksToRender}</ul>
      <h3>Top 10 Artists</h3>
      <ul>{artistsToRender}</ul>
    </div>
  );
}
