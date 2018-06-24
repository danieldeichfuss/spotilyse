import React from "react";
import mojs from "mo-js";

export default function Tab({ isActive, tabName, tabIndex, onClick }) {
  const shootLines = e => {
    const itemDim = e.currentTarget.getBoundingClientRect(),
      itemSize = {
        x: itemDim.right - itemDim.left,
        y: itemDim.bottom - itemDim.top
      },
      shapes = ["line", "zigzag"],
      colors = ["#2FB5F3", "#FF0A47", "#FF0AC2", "#47FF0A"];

    const chosenC = Math.floor(Math.random() * colors.length),
      chosenS = Math.floor(Math.random() * shapes.length);

    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      radiusX: itemSize.x,
      radiusY: itemSize.y,
      count: 8,

      children: {
        shape: shapes[chosenS],
        radius: 10,
        scale: { 0: 1.5 },
        fill: "none",
        points: 7,
        stroke: colors[chosenC],
        strokeDasharray: "100%",
        strokeDashoffset: { "-100%": "100%" },
        duration: 350,
        easing: "quad.out",
        isShowEnd: false
      }
    });
    burst.tune({ x: e.pageX, y: e.pageY });
    burst.replay();
  };

  return (
    <li className="Tab" onClick={shootLines}>
      <a
        className={`Tab__link ${isActive ? "active" : ""}`}
        onClick={event => {
          event.preventDefault();
          onClick(tabIndex);
        }}
      >
        {tabName}
      </a>
    </li>
  );
}
