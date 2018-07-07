import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
const wrapper = shallow(
  <Tabs>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </Tabs>
);

it("renders component correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
