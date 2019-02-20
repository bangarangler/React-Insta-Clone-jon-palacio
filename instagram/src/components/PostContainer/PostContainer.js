import React from "react";

import styles from "./PostContainer.module.scss";
import PostUserBanner from "./PostUserBanner/PostUserBanner";
import PostComments from "./PostComments/PostComments";

const PostContainer = props => {
  return (
    <div className={styles.PostContainer}>
      {props.dData.map((dUsr, index) => (
        <React.Fragment key={index}>
          <div className={styles.cardContain}>
            <PostUserBanner dUsr={dUsr} />
            <img className={styles.PostImg} src={dUsr.imageUrl} alt="post" />
            <PostComments
              index={index}
              //handleChange={props.handleChange}
              dUsr={dUsr}
              handleComment={props.handleComment}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostContainer;
