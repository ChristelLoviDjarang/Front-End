import React, { Component } from "react";

//import Header from "./Header";

class About extends Component {
  render() {
    const headerStyle = {
      background: "linear-gradient(90deg, #FF00FF, #00FFFF)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
    };

    return (
      <div className="App  w-100">
        <div className="card d-flex tangka flex-column vh-100 overflow-hidden w-100">
          <h1 style={headerStyle}>About</h1>
        </div>
      </div>
    );
  }
}

export default About;
