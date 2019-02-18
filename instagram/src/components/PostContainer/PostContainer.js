import React from "react";

import styles from "./PostContainer.module.scss";
import PostUserBanner from "./PostUserBanner/PostUserBanner";
import PostComments from "./PostComments/PostComments";

const PostContainer = props => {
  return (
    <div className={styles.PostContainer}>
      {props.dData.map((dUsr, index) => (
        <React.Fragment key={index}>
          <PostUserBanner dUsr={dUsr} />
          <PostComments dUsr={dUsr} />
        </React.Fragment>
      ))}
      ;
    </div>
  );
};

export default PostContainer;
