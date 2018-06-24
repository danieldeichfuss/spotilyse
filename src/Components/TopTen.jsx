import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function TopTen({ tracks, artists }) {
  const tracksToRender = tracks.map((track, i) => (
    <li className="TopTen__item" key={i.toString()}>
      <span>{track.name}</span>
    </li>
  ));
  const artistsToRender = artists.map((artist, i) => (
    <li className="TopTen__item" key={i.toString()}>
      <span>{artist.name}</span>
    </li>
  ));
  return (
    <div className="TopTen">
      <h2 className="TopTen__title">Your Top 10</h2>
      <h3 className="TopTen__sub-title">Top 10 Tracks</h3>
      <ReactCSSTransitionGroup
        transitionName="AppearTransition"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <ol className="TopTen__list">{tracksToRender}</ol>
      </ReactCSSTransitionGroup>
      <h3 className="TopTen__sub-title">Top 10 Artists</h3>
      <ReactCSSTransitionGroup
        transitionName="AppearTransition"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <ol className="TopTen__list">{artistsToRender}</ol>
      </ReactCSSTransitionGroup>
    </div>
  );
}
