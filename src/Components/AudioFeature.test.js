import React from "react";
import AudioFeature from "./AudioFeature";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new ReactSixteenAdapter() });

const audioFeature = {
  messages: ["Message 1", "Message 2"]
};
const featureValue = 0.5;
const wrapper = shallow(
  <AudioFeature audioFeature={audioFeature} featureValue={featureValue} />
);

it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
