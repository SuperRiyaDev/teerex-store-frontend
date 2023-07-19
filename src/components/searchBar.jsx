import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import './searchBar.css'

const SearchBar = ({value, searchChangeInput}) => (
    <div className="searchBar-wrap">
      <input
        type="text"
        placeholder="Search for products"
        value={value}
        onChange={searchChangeInput}
      />
      <SearchIcon className="searchBar-icon" />
    </div>
  );


export default SearchBar;
