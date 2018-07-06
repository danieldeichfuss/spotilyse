import React from "react";
import Bar from "./Bar";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const value = 0.5;
const wrapper = Enzyme.shallow(<Bar favouriteSong={value} />);

it("renders page correctly");
