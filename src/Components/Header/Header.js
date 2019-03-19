import React, { Component } from "react";
import logo from "../../img/logo.png";
class Header extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }
  state = {
    searchActive: false
  };
  activateSearch = () => {
    this.textInput.current.focus();
    this.setState({ searchActive: true });
  };
  blurSearch = () => {
    setTimeout(() => {
      this.setState({ searchActive: false });
    }, 300);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark  nav-default ">
        <a className="navbar-brand text-uppercase" href="#">
          Insite
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 justify-content-around">
            <a className="nav-item nav-link active" href="#">
              News <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Company
            </a>
            <a className="nav-item nav-link" href="#">
              Workspace
            </a>
            <a className="nav-item nav-link" href="#">
              Apps
            </a>
            <div className="nav-item nav-link d-lg-none" href="#">
              <div className="d-flex position-relative">
                <a className="nav-item nav-link " href="#">
                  <i className="far fa-envelope" />
                </a>
                <span className="badge">7</span>
              </div>
              <div className="position-relative">
                <input
                  type="text"
                  onClick={this.activateSearch}
                  onBlur={this.blurSearch}
                />
                <div className="close">
                  <span className="front" />
                  <span className="back" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="nav-item nav-link bonava-logo d-none d-lg-block" href="#">
          <img src={logo} style={{ height: "30px" }} alt=""/>
        </a>
        <div className=" navbar-right  d-none d-lg-flex">
          <a
            className="nav-item nav-link "
            href="#"
            style={{ color: this.state.searchActive ? "#004932" : "#fff" }}
          >
            {this.state.searchActive
              ? "BONAVA B | 2018.11.29 10:56 110.80 SEK"
              : "BONAVA B | 2018.11.29 10:56 110.80 SEK | +1.09% +1.20 SEK"}
          </a>
          <a className="nav-item nav-link " href="#">
            <input
              type="text"
              onClick={this.activateSearch}
              onBlur={this.blurSearch}
              // className={this.state.searchActive ? "focus" : ""}
              ref={this.textInput}
            />
            <div className="close">
              <span className="front" />
              <span className="back" onClick={this.activateSearch} />
            </div>
          </a>
          <div className="d-flex ">
            <a className="nav-item nav-link " href="#">
              <i className="far fa-envelope" />
            </a>
            <span className="badge">6</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
