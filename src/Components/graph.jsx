import React from "react";

function Graph({ relatedArtists, getRelatedArtists, accessToken }) {
  const nodePositions = calculateNodePosition(10, { x: 0, y: 0 }, 300);

  const nodesToRender = combineArrays(nodePositions, relatedArtists);

  let artistsToRender = nodesToRender.map((artist, i) => (
    <li
      className="Discover__item"
      key={i.toString()}
      style={{
        transform: "translate(" + artist[0].x + "px, " + artist[0].y + "px)"
      }}
    >
      <a
        onClick={() => {
          getRelatedArtists(artist[1], accessToken);
        }}
      >
        <div className="Discover__item__container">{artist[1].name}</div>
      </a>
    </li>
  ));

  return <ul className="Discover__list">{artistsToRender}</ul>;
}

function calculateNodePosition(items_count, start, radius) {
  const step = 2 * Math.PI / items_count;
  let angle = 0;
  let result = [];

  for (let i = 0; i < items_count; i++) {
    const x = Math.floor(start.x + radius * Math.cos(angle));
    const y = Math.floor(start.y + radius * Math.sin(angle));
    result.push({ x, y });
    angle += step;
  }

  return result;
}

function combineArrays(ar1, ar2) {
  return ar1.map((item, i) => {
    return [item, ar2[i]];
  });
}

export default Graph;
