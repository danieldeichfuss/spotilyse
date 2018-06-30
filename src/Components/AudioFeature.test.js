import React from "react";
import ReactDOM from "react-dom";
import AudioFeature from "./AudioFeature";
import renderer from "react-test-renderer";

const audioFeature = {
  messages: ["Message 1", "Message 2"]
};
const featureValue = 0.5;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AudioFeature audioFeature={audioFeature} featureValue={featureValue} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(
    <AudioFeature audioFeature={audioFeature} featureValue={featureValue} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
