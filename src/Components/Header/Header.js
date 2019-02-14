import React, { Component } from "react";
import logo from "../../img/logo.png";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark  nav-default">
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
          </div>
        </div>
        <a className="nav-item nav-link bonava-logo" href="#">
          <img src={logo} style={{ height: "30px" }} />
        </a>
        <div className="d-flex navbar-right">
          <a className="nav-item nav-link" href="#">
            BONAVA B | 2018.11.29 10:56 110.80 SEK | +1.09% +1.20 SEK
          </a>
          <a className="nav-item nav-link" href="#">
            <i className="fas fa-search" />
          </a>
          <div className="d-flex">
            <a className="nav-item nav-link" href="#">
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
