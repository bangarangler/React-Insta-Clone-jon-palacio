import React from "react";

import styles from "./SearchBar.module.scss";
import SearchBarLogo from "./SearchBarLogo/SearchBarLogo";
import SearchBarIcons from "./SearchBarIcons/SearchBarIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  searchChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.filter();
  };

  render() {
    return (
      <div className={styles.SearchBar}>
        <SearchBarLogo />
        <FontAwesomeIcon icon={faSearch} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="searchText"
            value={this.state.searchText}
            onChange={this.searchChange}
          />
        </form>
        <SearchBarIcons />
      </div>
    );
  }
}

export default SearchBar;
