import React from "react";
import AudioFeature from "./audio-feature";
import data from "../audio-features";

export default function FavouriteSong({
  favouriteSong,
  favouriteArtist,
  favouriteTrackFeatures
}) {
  const audioFeaturesToRender = data.audioFeatures.map(
    (audioFeature, index) => {
      const value = favouriteTrackFeatures[audioFeature.name];
      return (
        <AudioFeature
          audioFeature={data.audioFeatures[index]}
          featureValue={value}
          key={audioFeature.name}
        />
      );
    }
  );

  return (
    <div className="FavouriteSong">
      <h2>What your favourite songs say about you?</h2>
      <div>Your favourite song is: {favouriteSong && favouriteSong.name}</div>
      <div>
        Your favourite artist is: {favouriteArtist && favouriteArtist.name}
      </div>
      {audioFeaturesToRender}
    </div>
  );
}
