import React from "react";
import Header from "./Header";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new ReactSixteenAdapter() });

const wrapper = shallow(<Header />);

it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
