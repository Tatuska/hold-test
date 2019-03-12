import React, { Component } from "react";

class ImageGenerator extends Component {
  render() {
    return (
      <div
        className="imageGenerator d-flex flex-column p-0"
        style={{ order: this.props.right ? "1" : "0" }}
      >
        <div className="d-flex">
          <img src={this.props.img[0]} alt="" />
          <img src={this.props.img[1]} alt="" />
        </div>
        <div className="d-flex">
          <img src={this.props.img[2]} alt="" />
          <img src={this.props.img[3]} alt="" />
        </div>
      </div>
    );
  }
}

export default ImageGenerator;
