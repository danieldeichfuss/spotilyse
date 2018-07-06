import React from "react";
import AudioFeature from "./AudioFeature";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const audioFeature = {
  messages: ["Message 1", "Message 2"]
};
const featureValue = 0.5;
const wrapper = Enzyme.shallow(
  <AudioFeature audioFeature={audioFeature} featureValue={featureValue} />
);

it("renders page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
