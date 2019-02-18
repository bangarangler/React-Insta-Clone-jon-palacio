import React from "react";

import styles from "./PostComments.module.scss";

const PostComments = props => {
  return (
    <div className={styles.PostComments}>
      <p> likes comments icons</p>
      <p>timestamp</p>
      {props.dUsr.comments.map((com, index) => (
        <React.Fragment key={index}>
          <p>{com.text}</p>
        </React.Fragment>
      ))}
      <p>{props.dUsr.timestamp}</p>
      <input type="text" placeholder="Add a Comment..." />
    </div>
  );
};

export default PostComments;
