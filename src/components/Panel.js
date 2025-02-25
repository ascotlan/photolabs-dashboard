import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { onSelect, label, value, id } = this.props;

    return (
      <section
        className="dashboard__panel"
        onClick={() => onSelect(id)}
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;