import mojs from "mo-js";
import React, { Component } from "react";

class Bar extends Component {
  constructor() {
    super();
    this.circle = new mojs.Shape({
      shape: "circle"
    });
  }
  render() {
    return <div />;
  }

  shouldComponentUpdate() {
    this.props.isPlay && this._burst.replay();
    // return false;
  }

  componentDidMount() {
    this.circle.replay();
  }

  componentWillUnmount() {
    this.circle.remove();
  }
}

export default Bar;
