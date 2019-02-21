import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

const PostsPage = props => {
  return (
    <React.Fragment>
      <SearchBar dData={props.dData} filter={props.filter} />
      <PostContainer
        //handleChange={props.handleChange}
        dData={props.dData}
        handleComment={props.handleComment}
      />
    </React.Fragment>
  );
};

export default PostsPage;
