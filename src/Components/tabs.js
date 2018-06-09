import React from "react";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex || 0
    };
  }

  renderTabs = () => {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  };

  renderActiveContent = () => {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  };

  handleTabClick = tabIndex => {
    this.setState({
      activeTabIndex: tabIndex
    });
  };

  render() {
    return (
      <div>
        <ul className="tabs">{this.renderTabs()}</ul>
        <div className="tabs-active-content">{this.renderActiveContent()}</div>
      </div>
    );
  }
}
