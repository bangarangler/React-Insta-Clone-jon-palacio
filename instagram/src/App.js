import React, { Component } from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";
import PostsPage from "./components/PostContainer/PostsPage";

//import SearchBar from "./components/SearchBar/SearchBar";
//import PostContainer from "./components/PostContainer/PostContainer";

//const LoadPage = withAuthinticate(App);

class App extends Component {
  constructor() {
    super();
    //this.state = { dummyData, commentText: "" };
    this.state = {
      userData: [],
      filteredData: [],
      searchText: ""
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

  searchChange = e => {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  };

  //function to filter search
  //filterSearch = e => {
  //e.preventDefault();
  //const usnm = this.state.userData.filter(user =>
  //user.username.includes(e.target.value)
  //);
  ////this.setState({ filteredData: usnm });
  //console.log(usnm);
  //};

  render() {
    //console.log(this.state.userData);
    return (
      <div className="App">
        <PostsPage
          //handleChange={this.handleChange}
          dData={
            this.state.searchText !== ""
              ? this.state.userData.filter(usr =>
                  usr.username.includes(this.state.searchText)
                )
              : this.state.userData
          }
          handleComment={this.handleComment}
          searchChange={this.searchChange}
          searchText={this.state.searchText}
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
