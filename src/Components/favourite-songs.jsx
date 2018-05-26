import React from "react";

export default function FavouriteSongs(props) {
  return (
    <div>
      <h2>What your favourite songs say about you</h2>
      <span>
        Your favourite song is:{" "}
        {props.favouriteSong && props.favouriteSong.name}
      </span>
      <span>
        Your favourite artist is:{" "}
        {props.favouriteArtist && props.favouriteArtist.name}
      </span>
    </div>
  );
}
