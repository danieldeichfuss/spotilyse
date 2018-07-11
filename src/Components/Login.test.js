import React from "react";
import Login from "./Login";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new ReactSixteenAdapter() });

const wrapper = shallow(<Login />);
it("renders component correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
