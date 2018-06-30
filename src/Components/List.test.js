import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer";

const items = [];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List items={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders page correctly", () => {
//   const component = renderer.create(<List />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
