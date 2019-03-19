import React, { Component } from "react";
import MultiSelectItem from "./MultiSelectItem/MultiSelectItem";
import { connect } from "react-redux";
import { startPageAction } from "../../actions/startPageAction";

const data = [
  {
    country: "Group",
    status: true
  },
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
class MultiSelect extends Component {
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
    this.state.data.forEach((item, i) => {
      if (item.country === country) {
        this.setState(state => {
          const data = state.data.map((item, j) => {
            if (j === i) {
              return { country: item.country, status: !item.status };
            } else {
              return { country: item.country, status: item.status };
            }
          });

          return {
            data
          };
        });
      }
    });
  };
  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data });
    }
  }

  render() {
    return (
      <div className="multiSelect ">
        <div>
          <div className="d-flex justify-content-between">
            <span>Denmark</span>
            <button className="btn" onClick={this.showDropDown}>
              {!this.state.toggler ? (
                <i className="fas fa-chevron-down" />
              ) : (
                <i className="fas fa-chevron-up" />
              )}
            </button>
          </div>
        </div>
        {this.state.toggler ? (
          <div className="dropdown">
            {this.state.data.length
              ? this.state.data.map(function(object, i) {
                  return (
                    <MultiSelectItem
                      country={object.country}
                      key={i}
                      itemNumber={i}
                      checked={object.status}
                      //checkBoxChange={() => this.checkBoxChange(object.country)}
                    />
                  );
                }, this)
              : ""}
          </div>
        ) : (
          ""
        )}
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
)(MultiSelect);
