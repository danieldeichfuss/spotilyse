import React from "react";
import User from "./User";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const user = {
  name: "Name",
  imgUrl: "img-rul"
};
const wrapper = Enzyme.shallow(<User user={user} />);
it("renders page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
