import React from "react";

import styles from "./PostUserBanner.module.scss";
const PostUserBanner = props => {
  return (
    <div className={styles.PostUserBanner}>
      <img
        className={styles.userImg}
        src={props.dUsr.thumbnailUrl}
        alt="User Img"
      />
      <h2 className={styles.usrName}>{props.dUsr.username}</h2>
    </div>
  );
};

export default PostUserBanner;
