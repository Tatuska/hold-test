import React, { Component } from "react";
import MultiSelectItem from "./MultiSelectItem/MultiSelectItem";

const data = [
  {
    country: "Sweden",
    status: true
  },
  {
    country: "Finland",
    status: false
  },
  {
    country: "Denmark",
    status: true
  }
];
export default class MultiSelect extends Component {
  state = {
    toggler: false,
    data: []
  };
  showDropDown = () => {
    this.setState(prevState => ({
      toggler: !prevState.toggler
    }));
  };
  checkBoxChange = country => {
    console.log(country);
    this.state.data.forEach((item, i) => {
      if (item.country == country) {
        console.log(i);
      }
    });
  };
  componentDidMount = () => {
    this.setState({ data: data });
  };

  render() {
    return (
      <div className="multiSelect ">
        <div>
          <div className="d-flex justify-content-between">
            <span>Denmark</span>
            <button className="btn" onClick={this.showDropDown}>
              <i class="fas fa-chevron-down" />
            </button>
          </div>
        </div>
        {this.state.toggler ? (
          <div>
            {this.state.data.map(function(object, i) {
              return (
                <MultiSelectItem
                  country={object.country}
                  key={i}
                  checked={object.status}
                  checkBoxChange={() => this.checkBoxChange(object.country)}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
