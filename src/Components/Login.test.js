import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(<Login />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
