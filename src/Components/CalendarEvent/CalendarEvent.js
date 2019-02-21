import React, { Component } from "react";

export default class CalendarEvent extends Component {
  render() {
    return (
      <div className="calendarEvent">
        <div className="d-flex ">
          <div className="d-flex flex-column text-center">
            <i
              style={{ color: this.props.groupNews ? "#004932" : "#926647" }}
              className="far fa-calendar-alt"
            />
            <span>Jan 7th</span>
          </div>
          <div className="d-flex flex-column">
            <span
              className="text-uppercase"
              style={{ color: this.props.groupNews ? "#004932" : "#926647" }}
            >
              BONAVA GROUP
            </span>
            <p className="font-weight-bold w-100">Board meeting</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
