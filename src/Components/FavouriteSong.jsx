import React from "react";
import AudioFeature from "./AudioFeature";
import data from "../audio-features";

export default function FavouriteSong({
  favouriteSong,
  favouriteArtist,
  favouriteTrackFeatures
}) {
  const audioFeaturesToRender = data.audioFeatures.map(
    (audioFeature, index) => (
      <AudioFeature
        audioFeature={data.audioFeatures[index]}
        featureValue={favouriteTrackFeatures[audioFeature.name]}
        key={audioFeature.name}
      />
    )
  );

  return (
    <div className="FavouriteSong">
      <h2 className="FavouriteSong__intro">
        What your favourite songs say about you?
      </h2>
      <div className="FavouriteSong__song">
        <b>Your favourite song is:</b> {favouriteSong}
      </div>
      <div className="FavouriteSong__artist">
        <b>Your favourite artist is:</b> {favouriteArtist}
      </div>
      <div className="AudioFeatures">{audioFeaturesToRender}</div>
    </div>
  );
}
