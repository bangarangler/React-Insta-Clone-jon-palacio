import React from "react";

//import styles from "./SearchBar.module.scss";
import styled from "styled-components";
import SearchBarLogo from "./SearchBarLogo/SearchBarLogo";
import SearchBarIcons from "./SearchBarIcons/SearchBarIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

class SearchBar extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {
  //searchText: ""
  //};
  //}

  //handleSubmit = e => {
  //e.preventDefault();
  //this.props.filter();
  //};

  render() {
    return (
      //<div className={styles.SearchBar}>
      <SearchBarDiv>
        <SearchBarLogo />
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search"
          name="searchText"
          value={this.props.searchText}
          onChange={this.props.searchChange}
        />
        <SearchBarIcons />
      </SearchBarDiv>
    );
  }
}

export default SearchBar;
