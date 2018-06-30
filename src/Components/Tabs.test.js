import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";
import Tab from "./Tab";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Tabs>
      <Tab>TEST</Tab>
    </Tabs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(
    <Tabs>
      <Tab>TEST</Tab>
    </Tabs>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
