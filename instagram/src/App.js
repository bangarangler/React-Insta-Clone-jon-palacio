import React, { Component } from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";

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

dummyData.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default App;
