import React from "react";
import Discover from "./Discover";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
const selectedArtist = [];
const relatedArtists = {
  artists: []
};
const getRelatedArtists = jest.fn();

const wrapper = shallow(
  <Discover
    selectedArtist={selectedArtist}
    getRelatedArtists={getRelatedArtists}
    relatedArtists={relatedArtists}
  />
);
it("renders component correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
