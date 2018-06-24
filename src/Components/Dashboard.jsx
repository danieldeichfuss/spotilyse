import React from "react";
import User from "./User";
import FavouriteSong from "./FavouriteSong";
import TopTen from "./TopTen";
import Discover from "./Discover";
import Tabs from "./Tabs";
import Tab from "./Tab";

export default function Dashboard({
  user,
  tracks,
  artists,
  favouriteTrack,
  favouriteTrackFeatures
}) {
  return (
    <div className="Dashboard">
      <Tabs>
        <Tab tabName="User">
          <User user={user} />
        </Tab>
        <Tab tabName="Favourite Song">
          <FavouriteSong
            favouriteSong={tracks[0]}
            favouriteArtist={artists[0]}
            favouriteTrack={favouriteTrack}
            favouriteTrackFeatures={favouriteTrackFeatures}
          />
        </Tab>
        <Tab tabName="Top ten">
          <TopTen tracks={tracks} artists={artists} />
        </Tab>
        <Tab tabName="Discover">
          <Discover favouriteArtist={artists[0]} />
        </Tab>
      </Tabs>
    </div>
  );
}
