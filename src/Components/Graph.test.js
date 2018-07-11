import React from "react";
import Graph from "./Graph";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new ReactSixteenAdapter() });
const relatedArtists = [
  {
    name: "Artist 1"
  },
  {
    name: "Artist 2"
  },
  {
    name: "Artist 3"
  },
  {
    name: "Artist 4"
  },
  {
    name: "Artist 5"
  },
  {
    name: "Artist 6"
  },
  {
    name: "Artist 7"
  },
  {
    name: "Artist 8"
  },
  {
    name: "Artist 9"
  },
  {
    name: "Artist 10"
  }
];
const getRelatedArtists = jest.fn();
const selectedArtist = "Selected Artist";

const wrapper = shallow(
  <Graph
    relatedArtists={relatedArtists}
    getRelatedArtists={getRelatedArtists}
    selectedArtist={selectedArtist}
  />
);
it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
