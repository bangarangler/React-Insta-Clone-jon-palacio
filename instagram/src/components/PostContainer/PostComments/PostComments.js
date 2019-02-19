import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import styles from "./PostComments.module.scss";

const PostComments = props => {
  return (
    <div className={styles.PostComments}>
      <div className={styles.CommentIcons}>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
      </div>
      {props.dUsr.comments.map((com, index) => (
        <React.Fragment key={index}>
          <p className={styles.text}>{com.text}</p>
        </React.Fragment>
      ))}
      <p>{props.dUsr.timestamp}</p>
      <input type="text" placeholder="Add a Comment..." />
    </div>
  );
};

export default PostComments;
