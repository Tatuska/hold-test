import React, { Component } from "react";
import logo from "../../img/logo.png";
class Header extends Component {
  state = {
    searchActive: false
  };
  activateSearch = () => {
    console.log("active");
    this.setState({ searchActive: true });
  };
  blurSearch = () => {
    setTimeout(() => {
      this.setState({ searchActive: false });
    }, 200);
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
          // onClick={() => console.log("barev")}
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
            <div className="nav-item nav-link d-lg-none" href="#">
              <div>
                <input
                  type="text"
                  onClick={this.activateSearch}
                  onBlur={this.blurSearch}
                />
                <div class="close">
                  <span class="front" />
                  <span class="back" />
                </div>
              </div>
              <div className="d-flex position-relative">
                <a className="nav-item nav-link " href="#">
                  <i className="far fa-envelope" />
                </a>
                <span className="badge">7</span>
              </div>
            </div>

            {/* <a className="nav-item nav-link" href="#">
              Apps
            </a> */}
          </div>
        </div>
        <a className="nav-item nav-link bonava-logo d-none d-lg-block" href="#">
          <img src={logo} style={{ height: "30px" }} />
        </a>
        <div className=" navbar-right  d-none d-lg-flex">
          <a className="nav-item nav-link " href="#">
            {this.state.searchActive
              ? "BONAVA B | 2018.11.29 10:56 110.80 SEK"
              : "BONAVA B | 2018.11.29 10:56 110.80 SEK | +1.09% +1.20 SEK"}
          </a>
          <a className="nav-item nav-link " href="#">
            <input
              type="text"
              onClick={this.activateSearch}
              onBlur={this.blurSearch}
            />
            <div class="close">
              <span class="front" />
              <span class="back" />
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
