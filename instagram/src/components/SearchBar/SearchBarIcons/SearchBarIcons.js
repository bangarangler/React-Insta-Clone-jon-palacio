import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchBarIcons.module.scss";

const SearchBarIcons = props => {
  return (
    <div className={styles.SearchBarIcons}>
      <FontAwesomeIcon icon={faCompass} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default SearchBarIcons;
