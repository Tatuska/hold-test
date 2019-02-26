import React, { Component } from "react";

export default class MediaItem extends Component {
  render() {
    return (
      <div className="mediaItem">
        <span>12.11.2018</span>
        <div>
          <a href="#">
            <span>”Duis aute irure dolor in reprehin” </span>
            <br />
            <span>newspaper.com</span>
          </a>
          <hr />
        </div>
      </div>
    );
  }
}
