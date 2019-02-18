import React, { Component } from "react";
import "./App.scss";

import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="test">Testing</h1>
        <SearchBar />
        <p className="ptest">another test</p>
      </div>
    );
  }
}

export default App;
