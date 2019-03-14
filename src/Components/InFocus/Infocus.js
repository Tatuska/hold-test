import React, { Component } from "react";
import Focusitem from "../FocusItem/Focusitem";

export default class Infocus extends Component {
  render() {
    return (
      <div className=" ">
        <div className="focus">
          <div>
            <div className="">
              <h3>In Focus</h3>
            </div>
            <div className="row">
              <Focusitem
                groupNews={true}
                category={"BONAVA GROUP | STRATEGY"}
              />
              <Focusitem
                groupNews={true}
                category={"BONAVA GROUP | STRATEGY"}
              />
              <Focusitem
                groupNews={true}
                category={"BONAVA GROUP | STRATEGY"}
              />
              <Focusitem
                groupNews={true}
                category={"BONAVA GROUP | STRATEGY"}
              />
              <Focusitem
                groupNews={true}
                category={"BONAVA GROUP | STRATEGY"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
