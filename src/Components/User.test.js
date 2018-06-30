import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import renderer from "react-test-renderer";

const user = {
  name: "Name",
  imgUrl: "img-rul"
};
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<User user={user} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders page correctly", () => {
  const component = renderer.create(<User user={user} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
