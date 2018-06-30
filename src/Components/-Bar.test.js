import React from "react";
import ReactDOM from "react-dom";
import Bar from "./Bar";
import renderer from "react-test-renderer";

const value = 0.5;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Bar favouriteSong={value} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders page correctly", () => {
//   const component = renderer.create(<Bar favouriteSong={value} />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
