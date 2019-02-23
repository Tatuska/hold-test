import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import NewsFlow from "../../Components/NewsFlow/NewsFlow";
import Infocus from "../../Components/InFocus/Infocus";
import Sidebar from "../../Components/SideBar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";

class Startpage extends Component {
  render() {
    return (
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Header />
            </div>
          </div>
          <div className="row startPage">
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
              <Hero />
              <div className="d-flex category-box justify-content-center">
                <MultiSelect />
                <MultiSelect />
              </div>

              <NewsFlow />
              <Infocus />
              <div className="left-space" />
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12  d-flex flex-column">
              <Sidebar />
              <div className="left-space" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Startpage;
