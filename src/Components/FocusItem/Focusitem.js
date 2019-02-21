import React, { Component } from "react";

export default class Focusitem extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 d-flex focusItem">
        <img
          src="https://picsum.photos/182/144/?random"
          className="img-fluid"
          alt=""
        />
        <div className="d-flex flex-column">
          <span
            className="text-uppercase"
            style={{ color: this.props.groupNews ? "#004932" : "#926647" }}
          >
            {this.props.category}
          </span>
          <h2>Lorem ipsum dolor </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu
          </p>
        </div>
      </div>
    );
  }
}
