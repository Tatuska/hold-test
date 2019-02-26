import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import MultiSelect from "../MultiSelect/MultiSelect";
const img = ["https://picsum.photos/182/144/?random"];
const images = [
  "https://picsum.photos/182/144/?random",
  "https://picsum.photos/182/144/?random",
  "https://picsum.photos/182/144/?random",
  "https://picsum.photos/182/144/?random"
];

class NewsFlow extends Component {
  render() {
    return (
      <div>
        <div className="newsFlow">
          <div className="d-flex category-box justify-content-center">
            <MultiSelect />
            <MultiSelect />
          </div>
          <div>
            <NewsItem
              right={true}
              groupNews={true}
              category={"BONAVA GROUP | STRATEGY"}
              img={img}
            />
            <NewsItem
              right={true}
              groupNews={false}
              category={"Denmark  |  sustanability"}
              img={img}
            />
            <NewsItem
              right={false}
              groupNews={false}
              category={"Denmark  |  sustanability"}
              img={images}
            />
            <NewsItem
              right={false}
              groupNews={false}
              category={"Denmark  |  sustanability"}
              img={img}
            />
            <NewsItem
              right={true}
              groupNews={false}
              category={"Denmark  |  sustanability"}
              img={images}
            />
            <NewsItem
              right={true}
              groupNews={false}
              category={"Denmark  |  sustanability"}
              img={images}
            />
            <div className="text-center">
              <button className="btn">More News</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFlow;
