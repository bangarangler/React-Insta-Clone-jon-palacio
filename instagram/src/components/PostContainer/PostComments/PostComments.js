import React from "react";

import styles from "./PostComments.module.scss";

const PostComments = props => {
  return (
    <div className={styles.PostComments}>
      <p> likes comments icons</p>
      <p>timestamp</p>
      <input type="text" placeholder="Add a Comment..." />
    </div>
  );
};

export default PostComments;
