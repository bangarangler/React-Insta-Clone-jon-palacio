import React from "react";

//import styles from "./PostUserBanner.module.scss";
import styled from "styled-components";

const PostUserBannerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 2% auto;
  padding: 1%;
  box-sizing: border-box;

  p {
    margin: 1%;
  }
`;
const UserImgimg = styled.img`
  border-radius: 50%;
  height: 10%;
  width: 10%;
`;
const UserNameh2 = styled.h2`
  margin-left: 3%;
`;
const PostUserBanner = props => {
  return (
    //<div className={styles.PostUserBanner}>
    <PostUserBannerDiv>
      {/*<img
        className={styles.userImg}*/}
      <UserImgimg src={props.dUsr.thumbnailUrl} alt="User Img" />
      <UserNameh2>{props.dUsr.username}</UserNameh2>
      {/*<h2 className={styles.usrName}>{props.dUsr.username}</h2>*/}
    </PostUserBannerDiv>
  );
};

export default PostUserBanner;
