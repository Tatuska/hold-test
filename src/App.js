import React, { Component } from "react";
import logo from "./logo.svg";
import StartPage from "./pages/StartPage/Startpage";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StartPage />
      </div>
    );
  }
}

export default App;
