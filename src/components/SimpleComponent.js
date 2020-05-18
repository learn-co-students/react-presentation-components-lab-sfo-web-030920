import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      mood: "happy",
    };
  }

  changeMood = () => {
    this.state.mood === "happy"
      ? this.setState({ mood: "sad" })
      : this.setState({ mood: "happy" });
  };
  render() {
    return <div onClick={this.changeMood}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
