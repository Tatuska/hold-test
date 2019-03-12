import React, { Component } from "react";
import CommentField from "../CommentField/CommentField";
import ImageGenerator from "../ImageGenerator/ImageGenerator";
class NewsItem extends Component {
  render() {
    return (
      <div className="newsItem d-flex">
        {this.props.img.length === 4 ? (
          <ImageGenerator img={this.props.img} right={this.props.right} />
        ) : (
          <img
            src="https://picsum.photos/182/144/?random"
            className="img-fluid"
            alt=""
            style={{ order: this.props.right ? "1" : "0" }}
          />
        )}
        <div className="d-flex flex-column">
          <span
            className="text-uppercase"
            style={{ color: this.props.groupNews ? "#004932" : "#926647" }}
          >
            {this.props.category}
          </span>
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <CommentField />
        </div>
      </div>
    );
  }
}

export default NewsItem;
