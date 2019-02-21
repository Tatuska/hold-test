import React, { Component } from "react";

export default class VideoCorner extends Component {
  render() {
    return (
      <div className="videoCorner">
        <div>
          <h2>Joakim’s Corner</h2>
        </div>
        <div>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <p>
            Best, <br /> Joachim
          </p>
        </div>
        <img src="https://picsum.photos/230/138/?random" alt="" />
      </div>
    );
  }
}
