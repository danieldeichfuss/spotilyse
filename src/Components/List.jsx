import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function List({ items }) {
  const itemsToRender = items.map((item, i) => (
    <li className="List__item" key={i.toString()}>
      <span>{item.name}</span>
    </li>
  ));

  return (
    <ReactCSSTransitionGroup
      transitionName="AppearTransition"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <ol className="List">{itemsToRender}</ol>
    </ReactCSSTransitionGroup>
  );
}
