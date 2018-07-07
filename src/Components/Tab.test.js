import React from "react";
import Tab from "./Tab";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
const wrapper = shallow(<Tab />);
it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
