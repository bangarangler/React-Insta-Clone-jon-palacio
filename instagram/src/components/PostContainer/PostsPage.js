import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

const PostsPage = props => {
  return (
    <React.Fragment>
      <SearchBar
        searchChange={props.searchChange}
        searchText={props.searchText}
      />
      <PostContainer
        //handleChange={props.handleChange}
        dData={props.dData}
        handleComment={props.handleComment}
      />
    </React.Fragment>
  );
};

export default PostsPage;
