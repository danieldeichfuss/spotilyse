import React from "react";
import AudioFeature from "./AudioFeature";
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
      <h2 className="FavouriteSong__intro">
        What your favourite songs say about you?
      </h2>
      <div className="FavouriteSong__song">
        <b>Your favourite song is:</b> {favouriteSong && favouriteSong.name}
      </div>
      <div className="FavouriteSong__artist">
        <b>Your favourite artist is:</b>{" "}
        {favouriteArtist && favouriteArtist.name}
      </div>
      <div className="AudioFeatures">{audioFeaturesToRender}</div>
    </div>
  );
}
