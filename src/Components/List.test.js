import React from "react";
import List from "./List";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new ReactSixteenAdapter() });

const items = [];
const wrapper = shallow(<List items={items} />);

it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
