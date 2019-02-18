import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchBarIcons.module.scss";

const SearchBarIcons = props => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faCompass} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faUser} />
    </React.Fragment>
  );
};

export default SearchBarIcons;
