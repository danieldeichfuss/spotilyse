import React from "react";
import ReactDOM from "react-dom";
import Bar from "./Bar";

const value = 0.5;

it("renders without crushing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Bar favouriteSong={value} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
