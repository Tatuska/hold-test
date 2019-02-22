import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
class NewsFlow extends Component {
  render() {
    return (
      <div className="newsFlow">
        <div>
          <NewsItem
            right={true}
            groupNews={true}
            category={"BONAVA GROUP | STRATEGY"}
          />
          <NewsItem
            right={true}
            groupNews={false}
            category={"Denmark  |  sustanability"}
          />
          <NewsItem
            right={false}
            groupNews={false}
            category={"Denmark  |  sustanability"}
          />
          <NewsItem
            right={false}
            groupNews={false}
            category={"Denmark  |  sustanability"}
          />
          <NewsItem
            right={true}
            groupNews={false}
            category={"Denmark  |  sustanability"}
          />
          <NewsItem
            right={true}
            groupNews={false}
            category={"Denmark  |  sustanability"}
          />
          <div className="text-center">
            <button className="btn">More News</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFlow;
