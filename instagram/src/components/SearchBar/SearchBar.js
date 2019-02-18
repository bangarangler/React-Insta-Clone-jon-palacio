import React from "react";

import styles from "./SearchBar.module.scss";
import SearchBarLogo from "./SearchBarLogo/SearchBarLogo";
import SearchBarIcons from "./SearchBarIcons/SearchBarIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => {
  return (
    <div className={styles.SearchBar}>
      <SearchBarLogo />
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="Search" />
      <SearchBarIcons />
    </div>
  );
};

export default SearchBar;
