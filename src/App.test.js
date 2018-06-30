import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";
import { find, simulate } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders start page correctly", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// click Login Button renders new page
// it("renders start page correctly", () => {
//   const component = renderer.create(<App />);
//   let tree = component.toJSON();
//   tree.find("button").simulate("click");
//   expect(tree).toMatchSnapshot();
// });

// Test Login

// User page gets rendered correctly

// Favourite Song

// - page renders correctly
// - Audio Feature component renders correctly
// - test switch statement
// - processFeatureValue()
// - convertToPercentage()
// - formatFeatureValue()
// - Bar renders correctly

// Top Ten page renders correctly

// Discover renders correctly

// Tabs work correctly
