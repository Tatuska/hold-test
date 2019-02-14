import React, { Component } from "react";
import CommentField from "../CommentField/CommentField";

class Hero extends Component {
  render() {
    return (
      <div className="col-lg-9 col-md-12 hero d-flex">
        <div className="d-flex">
          <div className="hero-left d-flex">
            <div>
              <img src="https://picsum.photos/199/157/?random" alt="" />
              <div>
                <span>Bonava Group</span>
              </div>
            </div>
            <div className="d-flex flex-column">
              <span className="text-uppercase">Strategy</span>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <CommentField />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="hero-right">
              <div className="d-flex ">
                <div>
                  <img src="https://picsum.photos/116/88/?random" alt="" />
                  <div>
                    <span>Denmark</span>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <span className="text-uppercase">Strategy</span>
                  <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                  <p>Duis aute irure dolor in reprehenderit</p>
                  <CommentField />
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="d-flex ">
                <div>
                  <img src="https://picsum.photos/116/88/?random" alt="" />
                  <div>
                    <span>Denmark</span>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <span className="text-uppercase">Strategy</span>
                  <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                  <p>Duis aute irure dolor in reprehenderit</p>
                  <CommentField />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
