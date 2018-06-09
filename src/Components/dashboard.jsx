import React from "react";
import User from "./user";
import FavouriteSong from "./favourite-song";
import TopTen from "./top-ten";
import Discover from "./discover";
import Tabs from './tabs';
import Tab from './tab';


export default function Dashboard(props) {
  return (
    <div className="Dashboard">
      <Tabs>
        <Tab tabName="User"><User user={props.user} /></Tab>
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
