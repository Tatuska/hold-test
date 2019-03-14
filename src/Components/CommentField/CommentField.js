import React, { Component } from "react";

class CommentField extends Component {
  render() {
    return (
      <div className="d-flex  comment-field  ">
        <div
          className="d-flex align-items-center position-relative"
          style={{ width: this.props.newlistItem ? "15%" : "auto" }}
        >
          <i className="fas fa-comment-alt position-absolute" />
          <span className="position-absolute">3</span>
          <i className="fas fa-thumbs-up position-absolute" />
          <span className="position-absolute">1</span>
        </div>
        <span>12.11.2018</span>
      </div>
    );
  }
}

export default CommentField;
