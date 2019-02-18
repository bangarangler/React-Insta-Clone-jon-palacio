import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./SearchBarLogo.module.scss";

const SearchBarLogo = props => {
  return (
    <div className={styles.SearchBarLogo}>
      <FontAwesomeIcon icon={faInstagram} />
      <p>Instagram</p>
    </div>
  );
};

export default SearchBarLogo;
