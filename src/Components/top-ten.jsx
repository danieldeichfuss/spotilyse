import React from "react";

export default function TopTen(props) {
  const tracksToRender =
    props.tracks &&
    props.tracks.map((track, i) => (
      <li className="TopTen__item" key={i.toString()}>
        <span>{track.name}</span>
      </li>
    ));
  const artistsToRender =
    props.artists &&
    props.artists.map((artist, i) => (
      <li className="TopTen__item" key={i.toString()}>
        <span>{artist.name}</span>
      </li>
    ));
  return (
    <div className="TopTen">
      <h2 className="TopTen__title">Your Top 10</h2>
      <h3 className="TopTen__sub-title">Top 10 Tracks</h3>
      <ol className="TopTen__list">{tracksToRender}</ol>
      <h3 className="TopTen__sub-title">Top 10 Artists</h3>
      <ol className="TopTen__list">{artistsToRender}</ol>
    </div>
  );
}
