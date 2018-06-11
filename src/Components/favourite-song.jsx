import React from "react";
import AudioFeature from "./audio-feature";

export default function FavouriteSong({
  favouriteSong,
  favouriteArtist,
  favouriteTrackFeatures
}) {
  return (
    <div className="FavouriteSong">
      <h2>What your favourite songs say about you?</h2>
      <div>Your favourite song is: {favouriteSong && favouriteSong.name}</div>
      <div>
        Your favourite artist is: {favouriteArtist && favouriteArtist.name}
      </div>
      <div className="AudioFeatures">
        <AudioFeature
          featureName="acousticness"
          featureValue={favouriteTrackFeatures.acousticness}
        />
        <AudioFeature
          featureName="danceability"
          featureValue={favouriteTrackFeatures.danceability}
        />
        <div className="AudioFeatures__item">
          <div className="AudioFeatures__value">
            Danceability: {favouriteTrackFeatures.danceability}
          </div>
          <div className="AudioFeatures__result">
            {favouriteTrackFeatures.danceability > 0.5
              ? "You dance like nobody is watching"
              : "Steady like a stone, dancing is for the crazies"}
          </div>
        </div>
        <div className="AudioFeatures__item">
          <div className="AudioFeatures__value">
            Energy: {favouriteTrackFeatures.energy}
          </div>
          <div className="AudioFeatures__result">
            {favouriteTrackFeatures.energy > 0.5
              ? "You are pumped! Gimme some of your energiezzzzz"
              : "Keep it mellow my friend"}
          </div>
        </div>
        <div className="AudioFeatures__item">
          <div className="AudioFeatures__value">
            Liveness: {favouriteTrackFeatures.liveness}
          </div>
          <div className="AudioFeatures__result">
            {favouriteTrackFeatures.liveness > 0.5
              ? "Concerts are the best"
              : "Please be quiet people, I want to enjoy my music"}
          </div>
        </div>
        <div className="AudioFeatures__item">
          <div className="AudioFeatures__value">
            Loudness: {favouriteTrackFeatures.loudness}
          </div>
          <div className="AudioFeatures__result">
            {favouriteTrackFeatures.loudness > 0
              ? "Be careful, protect your ears"
              : "You ears are safe!"}
          </div>
        </div>
        <div className="AudioFeatures__item">
          <div className="AudioFeatures__value">
            Tempo: {favouriteTrackFeatures.tempo}
          </div>
          <div className="AudioFeatures__result">
            {favouriteTrackFeatures.tempo > 72
              ? "Be careful, protect your ears"
              : "You ears are safe!"}
          </div>
        </div>
        <div className="AudioFeatures__item">
          <div className="AudioFeatures__value">
            Tempo: {favouriteTrackFeatures.valence}
          </div>
          <div className="AudioFeatures__result">
            {favouriteTrackFeatures.tempo > 0.5
              ? "You are a positive person! Keep up the good vibes"
              : "The world is a dark place"}
          </div>
        </div>
      </div>
    </div>
  );
}
