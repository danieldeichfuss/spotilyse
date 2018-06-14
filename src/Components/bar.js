import React from "react";

const Bar = props => {
  const colors = ["#8867D7", "#C839A5", "#F663AD", "#E8C37E"];
  const colorIndex = Math.floor(Math.random() * Math.floor(4));

  const barStyle = {
    width: props.value,
    background: colors[colorIndex]
  };

  return (
    <div className="Bar">
      <div style={barStyle} className="Bar__item">
        <span className="Bar__value">{props.value}</span>
      </div>
    </div>
  );
};

export default Bar;
