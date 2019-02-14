import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import NewsFlow from "../../Components/NewsFlow/NewsFlow";

class Startpage extends Component {
  render() {
    return (
      <div id="content">
        <div className="container-fluid">
          <div className="container" style={{ maxWidth: "1140px" }}>
            <Header />
            <div className="row">
              <Hero />
              <NewsFlow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Startpage;
