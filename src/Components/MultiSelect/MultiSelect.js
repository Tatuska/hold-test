import React, { Component } from "react";

export default class MultiSelect extends Component {
  render() {
    return (
      <div>
        <select multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    );
  }
}
