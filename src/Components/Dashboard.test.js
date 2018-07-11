import React from "react";
import Dashboard from "./Dashboard";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
const tracks = [{ name: "Track Name" }];
const artists = [{ artist: "Artist Name" }];
const user = { imgUrl: "img-url" };
const wrapper = shallow(
  <Dashboard tracks={tracks} artists={artists} user={user} />
);

it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
