import React, { Component } from "react";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import MultiSelect from "../MultiSelect/MultiSelect";

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <h3>Calendar</h3>
        <div className="d-flex">{/* <p>Business area</p> */}</div>
        <MultiSelect />
        <CalendarEvent groupNews={true} category={"BONAVA GROUP"} />
        <CalendarEvent groupNews={false} category={"BONAVA GROUP"} />
        <CalendarEvent groupNews={true} category={"BONAVA GROUP"} />
      </div>
    );
  }
}
