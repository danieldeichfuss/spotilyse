import React from "react";
import Button from "./Button";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
const text = "Button Text";
const wrapper = shallow(<Button text={text} />);

it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
