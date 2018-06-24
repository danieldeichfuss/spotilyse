import React from "react";
import List from "./List";

export default function TopTen({ tracks, artists }) {
  return (
    <div className="TopTen">
      <h2 className="TopTen__title">Your Top 10</h2>
      <h3 className="TopTen__sub-title">Top 10 Tracks</h3>
      <List items={tracks} />
      <h3 className="TopTen__sub-title">Top 10 Artists</h3>
      <List items={artists} />
    </div>
  );
}
