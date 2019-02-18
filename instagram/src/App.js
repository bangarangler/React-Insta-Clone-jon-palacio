import React, { Component } from "react";
import "./App.scss";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = { dummyData };
  }
  render() {
    console.log(this.state.dummyData);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
