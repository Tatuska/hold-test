import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
class NewsFlow extends Component {
  render() {
    return (
      <div className="newsFlow">
        <div>
          <NewsItem groupNews={true} category={"BONAVA GROUP | STRATEGY"} />
          <NewsItem groupNews={false} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={false} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={true} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={false} category={"Denmark  |  sustanability"} />
          <NewsItem groupNews={true} category={"Denmark  |  sustanability"} />
          <div className="text-center">
            <button className="btn">More News</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFlow;
