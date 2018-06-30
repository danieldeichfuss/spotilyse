import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import renderer from "react-test-renderer";

const text = "Button Text";
const callback = jest.fn();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button text={text} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(<Button text={text} callback={callback} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
