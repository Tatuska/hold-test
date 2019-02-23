import React, { Component } from "react";

export default class MultiSelectItem extends Component {
  render() {
    return (
      <div>
        <div class="multiSelectItem">
          <input
            id="news-Group"
            name="country"
            class="country inline"
            type="checkbox"
            checked={this.props.checked}
            value="Group"
            disabled="disabled"
            onChange={this.props.checkBoxChange}
          />
          <label for="news-Group" class="inline">
            {this.props.country}
          </label>
        </div>
      </div>
    );
  }
}
