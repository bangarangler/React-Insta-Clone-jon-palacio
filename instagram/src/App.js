import React, { Component } from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    //this.state = { dummyData, commentText: "" };
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ userData: dummyData });
    }, 1000);
  }

  handleComment = (e, index, commentText, resetString) => {
    e.preventDefault();
    this.setState({
      userData: this.state.userData.map((post, idx) => {
        if (index === idx) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                username: "bob",
                text: commentText
              }
            ]
          };
        } else {
          return post;
        }
      })
    });
    console.log("running");
    resetString();
  };

  render() {
    console.log(this.state.userData);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          handleChange={this.handleChange}
          dData={this.state.userData}
          handleComment={this.handleComment}
        />
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
