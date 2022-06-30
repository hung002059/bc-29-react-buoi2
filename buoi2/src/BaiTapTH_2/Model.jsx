import React, { Component } from "react";
import data from "./dataGlasses.json";

export default class extends Component {
  renderGlassModel = () => {
    return (
      <img
        style={{
          transform: "scale(0.8)",
          opacity: "0.8",
          position: "absolute",
          top: "20%",
          left: "12%",
        }}
        src={this.props.changeGlasses}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="card">
          <img
            style={{ position: "relative" }}
            height="{350}"
            className="card-img-top"
            src="./glassesImage/model.jpg"
          />
        </div>
        {this.renderGlassModel()}
      </div>
    );
  }
}
