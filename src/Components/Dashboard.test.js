import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";

const tracks = [{ name: "Track Name" }];
const artists = [{ artist: "Artist Name" }];
const user = { imgUrl: "img-url" };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Dashboard tracks={tracks} artists={artists} user={user} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(
    <Dashboard tracks={tracks} artists={artists} user={user} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
