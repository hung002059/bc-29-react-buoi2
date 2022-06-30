import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    const { url } = this.props.item;
    return (
      <>
        <img
          onClick={() => {
            return this.props.descGlass(this.props.item);
          }}
          className="img-fluid"
          src={url}
        />
      </>
    );
  }
}
