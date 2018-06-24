import React from "react";
import User from "./User";
import FavouriteSong from "./FavouriteSong";
import TopTen from "./TopTen";
import Discover from "./Discover";
import Tabs from "./Tabs";
import Tab from "./Tab";

export default function Dashboard(props) {
  return (
    <div className="Dashboard">
      <Tabs>
        <Tab tabName="User">
          <User user={props.user} />
        </Tab>
        <Tab tabName="Favourite Song">
          <FavouriteSong
            favouriteSong={props.tracks[0]}
            favouriteArtist={props.artists[0]}
            favouriteTrack={props.favouriteTrack}
            favouriteTrackFeatures={props.favouriteTrackFeatures}
          />
        </Tab>
        <Tab tabName="Top ten">
          <TopTen tracks={props.tracks} artists={props.artists} />
        </Tab>
        <Tab tabName="Discover">
          <Discover favouriteArtist={props.artists[0]} />
        </Tab>
      </Tabs>
    </div>
  );
}
