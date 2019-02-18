import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./SearchBarLogo.module.scss";

const SearchBarLogo = props => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faInstagram} />
      <p>Instagram</p>
    </React.Fragment>
  );
};

export default SearchBarLogo;
