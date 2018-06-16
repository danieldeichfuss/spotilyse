import React from "react";
import mojs from "mo-js";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false
    };
  }

  shootLines(e) {
    const itemDim = e.currentTarget.getBoundingClientRect(),
      itemSize = {
        x: itemDim.right - itemDim.left,
        y: itemDim.bottom - itemDim.top
      },
      shapes = ["line", "zigzag"],
      colors = ["#2FB5F3", "#FF0A47", "#FF0AC2", "#47FF0A"];

    const chosenC = Math.floor(Math.random() * colors.length),
      chosenS = Math.floor(Math.random() * shapes.length);

    // create shape
    const burst = new mojs.Burst({
      left: itemDim.left + itemSize.x / 2,
      top: itemDim.top + itemSize.y / 2,
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

    burst.play();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <li className="Tab" onClick={this.shootLines}>
        <a
          className={`Tab__link ${this.props.isActive ? "active" : ""}`}
          onClick={event => {
            event.preventDefault();
            this.props.onClick(this.props.tabIndex);
          }}
        >
          {this.props.tabName}
        </a>
      </li>
    );
  }
}

export default Tab;
