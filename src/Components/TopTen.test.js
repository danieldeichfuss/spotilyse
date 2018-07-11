import React from "react";
import TopTen from "./TopTen";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
configure({ adapter: new ReactSixteenAdapter() });

const tracks = [];
const artists = [];

const wrapper = shallow(<TopTen tracks={tracks} artists={artists} />);

it("should render the component correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
