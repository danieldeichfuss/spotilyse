import React from "react";

const Tab = props => {
  return (
    <li className="Tab">
      <a
        className={`Tab__link ${props.isActive ? "active" : ""}`}
        onClick={event => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}
      >
        {props.tabName}
      </a>
    </li>
  );
};

export default Tab;
