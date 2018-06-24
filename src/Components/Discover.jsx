import React from "react";
import Graph from "./Graph";

export default function Discover({
  selectedArtist,
  getRelatedArtists,
  relatedArtists
}) {
  return (
    <div className="Discover">
      <h2 className="Discover__title">Discover your favourite Artists</h2>
      <Graph
        relatedArtists={relatedArtists.artists}
        getRelatedArtists={getRelatedArtists}
        selectedArtist={selectedArtist}
      />
    </div>
  );
}
