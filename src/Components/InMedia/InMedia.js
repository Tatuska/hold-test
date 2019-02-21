import React, { Component } from "react";
import MediaItem from "../MediaItem/MediaItem";
export default class InMedia extends Component {
  render() {
    return (
      <div className="inMedia">
        <div>
          <h2>Bonava in media</h2>
        </div>
        <div>
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
        </div>
      </div>
    );
  }
}
