import React, { Component } from "react";

export default class NewsTabs extends Component {
  render() {
    return (
      <div className="newsTabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Bonava group
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Denmark
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div>
              <span>
                Highlighted Theme:
                <br />
                <span className="font-weight-bold">Sustainability</span>
              </span>
              <p>
                Solar panels are the new black. At least thats the mission. On
                November 18th, we installed our largest charge towards 100%..
              </p>
            </div>
            <img src="https://picsum.photos/230/138/?random" alt="" />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div>
              <span>
                Highlighted Theme:
                <br />
                <span className="font-weight-bold">Sustainability</span>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img src="https://picsum.photos/230/132/?random" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
