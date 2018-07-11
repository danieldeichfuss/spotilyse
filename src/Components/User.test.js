import React from "react";
import User from "./User";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
const user = {
  name: "Name",
  imgUrl: "img-url"
};
const wrapper = shallow(<User user={user} />);
it("renders page correctly", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
