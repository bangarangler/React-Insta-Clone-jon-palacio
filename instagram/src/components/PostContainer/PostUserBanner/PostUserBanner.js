import React from "react";

import styles from "./PostUserBanner.module.scss";
const PostUserBanner = props => {
  return (
    <div className={styles.PostUserBanner}>
      <img src={props.dUsr.thumbnailUrl} alt="User Img" />
      <h2>{props.dUsr.username}</h2>
    </div>
  );
};

export default PostUserBanner;
