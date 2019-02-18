import React from "react";

import styles from "./SearchBar.module.scss";
import SearchBarLogo from "./SearchBarLogo/SearchBarLogo";
import SearchBarIcons from "./SearchBarIcons/SearchBarIcons";

const SearchBar = props => {
  return (
    <div>
      <SearchBarLogo />
      <input type="text" placeholder='{<span>icon</span>"Search"}' />
      <SearchBarIcons />
    </div>
  );
};

export default SearchBar;
