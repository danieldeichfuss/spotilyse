import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./TopTen";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const tracks = [];
const artists = [];

const wrapper = Enzyme.shallow(<TopTen tracks={tracks} artists={artists} />);

it("should render the component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
