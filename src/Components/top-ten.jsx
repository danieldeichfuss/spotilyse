import React from "react";

export default function TopTen(props) {
  const tracksToRender =
    props.tracks &&
    props.tracks.map((track, i) => <li key={i.toString()}>{track.name}</li>);
  const artistsToRender =
    props.artists &&
    props.artists.map((artist, i) => <li key={i.toString()}>{artist.name}</li>);
  return (
    <div className="TopTen">
      <h2 className="TopTen__title">Your Top 10</h2>
      <h3 className="TopTen__sub-title">Top 10 Tracks</h3>
      <ul className="TopTen__list">{tracksToRender}</ul>
      <h3 className="TopTen__sub-title">Top 10 Artists</h3>
      <ul className="TopTen__list">{artistsToRender}</ul>
    </div>
  );
}
