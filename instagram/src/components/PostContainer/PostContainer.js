import React from "react";

import styles from "./PostContainer.module.scss";
import PostUserBanner from "./PostUserBanner/PostUserBanner";
import PostComments from "./PostComments/PostComments";

const PostContainer = props => {
  return (
    <div className={styles.PostContainer}>
      <PostUserBanner />
      <img src="#" alt="test" />
      <PostComments />
    </div>
  );
};

export default PostContainer;
