import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

//import styles from "./SearchBarLogo.module.scss";
import styled from "styled-components";

const SearchBarLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3%;
  font-size: 1.6rem;
  p {
    margin-left: 5%;
    border-left: 3px solid black;
    padding: 5%;
  }
`;

const SearchBarLogo = props => {
  return (
    //<div className={styles.SearchBarLogo}>
    <SearchBarLogoDiv>
      <FontAwesomeIcon icon={faInstagram} />
      <p>Instagram</p>
    </SearchBarLogoDiv>
  );
};

export default SearchBarLogo;
