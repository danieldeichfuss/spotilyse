import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./TopTen";
import renderer from "react-test-renderer";

const tracks = [];
const artists = [];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TopTen tracks={tracks} artists={artists} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders page correctly", () => {
//   const component = renderer.create(
//     <TopTen tracks={tracks} artists={artists} />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
