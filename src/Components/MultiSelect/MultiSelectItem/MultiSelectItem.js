import React, { Component } from "react";

export default class MultiSelectItem extends Component {
  render() {
    return (
      <div className="multiSelectItem">
        <label className="multiSelectItem d-flex justify-content-between">
          {this.props.country}
          <div className="position-relative">
            <input
              id=""
              name="country"
              className=""
              type="checkbox"
              checked={this.props.checked}
              disabled={this.props.country === "Group" ? "disabled" : ""}
              onChange={this.props.checkBoxChange}
            />
            <span className="checkmark" />
          </div>
        </label>
      </div>
    );
  }
}
