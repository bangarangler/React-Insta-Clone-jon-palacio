import React from "react";

import styles from "./PostUserBanner.module.scss";
const PostUserBanner = props => {
  return (
    <div className={styles.PostUserBanner}>
      <img src={props.dUsr.imageUrl} alt="User Img" />
      <p>UsrImg</p>
      <h2>{props.username}</h2>
      <p>usrName</p>
    </div>
  );
};

export default PostUserBanner;
