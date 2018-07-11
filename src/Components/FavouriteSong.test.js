import React from "react";
import FavouriteSong from "./FavouriteSong";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new ReactSixteenAdapter() });
const favouriteSong = "Favourite Song";
const favouriteArtist = "Favourite Artist";
const favouriteTrackFeatures = {
  audioFeature: {
    name: "Name"
  }
};
const wrapper = shallow(
  <FavouriteSong
    favouriteSong={favouriteSong}
    favouriteArtist={favouriteArtist}
    favouriteTrackFeatures={favouriteTrackFeatures}
  />
);

it("renders component correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
