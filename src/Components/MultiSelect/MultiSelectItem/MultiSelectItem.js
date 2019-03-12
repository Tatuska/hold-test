import React, { Component } from "react";
import { connect } from "react-redux";
import {
  startPageAction,
  checkBoxChanges
} from "../../../actions/startPageAction";

class MultiSelectItem extends Component {
  checkBoxChange = () => {
    this.props.checkBoxChange(this.props.itemNumber);
  };
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
              onChange={() => this.checkBoxChange(this.props.key)}
              //onChange={this.props.checkBoxChange}
            />
            <span className="checkmark" />
          </div>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.startPage.data || {}
  };
};

const mapDispatchToProps = dispatch => ({
  checkBoxChange(key) {
    dispatch(checkBoxChanges(key));
  }
  // setStep(step) {
  //   dispatch(setStep(step));
  // },
  // getUser(token) {
  //   dispatch(fetchUser(token));
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiSelectItem);
