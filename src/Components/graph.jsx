import React from "react";

function Graph({ relatedArtists, getRelatedArtists, accessToken }) {
  console.log(relatedArtists);

  let artistsToRender = relatedArtists
    ? relatedArtists.map((artist, i) => (
        <li className="Discover__item" key={i.toString()}>
          <a
            onClick={() => {
              getRelatedArtists(artist, accessToken);
            }}
          >
            <div className="Discover__item__container">{artist.name}</div>
          </a>
        </li>
      ))
    : "";

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

function renderNodes(points) {}

export default Graph;

// console.log(
//   relatedArtists && getRelatedArtists(relatedArtists[0], accessToken)
// );
