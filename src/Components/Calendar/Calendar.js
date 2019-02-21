import React, { Component } from "react";
import CalendarEvent from "../CalendarEvent/CalendarEvent";

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <h3>Calendar</h3>
        <div className="d-flex">
          <p>Business area</p>
          <p>Month</p>
        </div>
        <CalendarEvent groupNews={true} category={"BONAVA GROUP"} />
        <CalendarEvent groupNews={false} category={"BONAVA GROUP"} />
        <CalendarEvent groupNews={true} category={"BONAVA GROUP"} />
      </div>
    );
  }
}
