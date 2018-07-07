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
  }
];
const getRelatedArtists = jest.fn();
const selectedArtist = "Selected Artist";
console.log(relatedArtists);

debugger;
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

it("renders page correctly");
