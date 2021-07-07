import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

//import styles from "./SearchBarIcons.module.scss";
import styled from "styled-components";

const SearchBarIconsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
  width: 25%;
`;

const SearchBarIcons = props => {
  return (
    //<div className={styles.SearchBarIcons}>
    <SearchBarIconsDiv>
      <FontAwesomeIcon icon={faCompass} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faUser} />
    </SearchBarIconsDiv>
  );
};

export default SearchBarIcons;
