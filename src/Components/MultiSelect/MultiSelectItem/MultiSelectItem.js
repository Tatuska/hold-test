import React, { Component } from "react";

export default class MultiSelectItem extends Component {
  render() {
    return (
      <div>
        <div class="countryContainer">
          <input
            id="news-Group"
            name="country"
            class="country inline"
            type="checkbox"
            checked="checked"
            value="Group"
            disabled="disabled"
          />
          <label for="news-Group" class="inline">
            Group
          </label>
        </div>
      </div>
    );
  }
}
