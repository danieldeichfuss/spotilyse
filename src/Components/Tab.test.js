import React from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tab />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(<Tab />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
