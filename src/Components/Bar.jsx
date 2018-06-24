import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function Bar({ value }) {
  const colors = ["#8867D7", "#C839A5", "#F663AD", "#E8C37E"];
  const colorIndex = Math.floor(Math.random() * Math.floor(4));

  const barStyle = {
    width: value,
    background: colors[colorIndex]
  };

  return (
    <div className="Bar">
      <ReactCSSTransitionGroup
        transitionName="AppearTransition"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="Bar__item" style={barStyle}>
          <span className="Bar__value">{value}</span>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}
