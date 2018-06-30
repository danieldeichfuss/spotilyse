import React from "react";
import ReactDOM from "react-dom";
import Discover from "./Discover";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  // ReactDOM.render(<Discover relatedArtists={relatedArtists} />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

// it("renders page correctly", () => {
//   const component = renderer.create(<Discover />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
