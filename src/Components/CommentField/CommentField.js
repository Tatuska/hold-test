import React, { Component } from "react";

class CommentField extends Component {
  render() {
    return (
      <div className="d-flex  comment-field">
        <div className="d-flex align-items-center">
          <i className="fas fa-comment-alt" />
          <span>3</span>
          <i className="fas fa-thumbs-up" />
          <span>1</span>
        </div>
        <span>12.11.2018</span>
      </div>
    );
  }
}

export default CommentField;
