import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
class NewsFlow extends Component {
  render() {
    return (
      <div className="col-lg-9 col-md-12 col-sm newsFlow">
        <div>
          <NewsItem groupNews={true} category={"BONAVA GROUP | STRATEGY"} />
          <NewsItem groupNews={false} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={false} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={true} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={false} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={true} category={"Denmark  |  sustanability"} />
          <div className="text-center">
            <a>More News</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFlow;
