import React from "react";

export default function FavouriteSongs(props) {
  let favouriteSong = props.favouriteSong || null;
  let favouriteArtist = props.favouriteArtist || null;

  return (
    <div>
      <h2>What your favourite songs say about you</h2>
      <div>Your favourite song is: {favouriteSong && favouriteSong.name}</div>
      <div>
        Your favourite artist is: {favouriteArtist && favouriteArtist.name}
      </div>
    </div>
  );
}
