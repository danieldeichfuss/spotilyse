import React from "react";

const Tab = props => {
  return (
    <li
      className={`Tab ${props.isActive ? "active" : ""}`}
      onClick={event => {
        event.preventDefault();
        props.onClick(props.tabIndex);
      }}
    >
      {props.tabName}
    </li>
  );
};

export default Tab;
