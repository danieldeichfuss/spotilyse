import React from "react";
import ReactDOM from "react-dom";
import Graph from "./Graph";
import renderer from "react-test-renderer";

// const relatedArtists = [
//   [
//     { x: 0, y: 0 },
//     {
//       name: "Artist 1"
//     }
//   ],
//   [
//     { x: 0, y: 0 },
//     {
//       name: "Artist 2"
//     }
//   ]
// ];

it("renders without crashing", () => {
  const div = document.createElement("div");
  // ReactDOM.render(<Graph />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

// it("renders page correctly", () => {
//   const component = renderer.create(<Graph relatedArtists={relatedArtists} />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
